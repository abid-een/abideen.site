# Cache Architecture Design - Phase 2 Wave 3

## Cache Architecture Overview

### Cache Strategy
**Primary Cache**: Redis (in-memory data store)  
**Cache Type**: Write-through with read-aside pattern  
**Cache Invalidation**: Time-based (TTL) + Event-based  
**Cache Warming**: Proactive warming for frequently accessed data  

## Cache Key Naming Conventions

### Key Structure
```
{service}:{entity}:{id}:{context?}
```

### Examples
- `invoice:12345:basic` - Basic invoice data
- `invoice:12345:full` - Complete invoice with relations
- `customer:67890:profile` - Customer profile data
- `product:11111:pricing` - Product pricing information
- `report:monthly:2024-04` - Monthly report data
- `gst:rates:2024` - GST rates for year 2024

### Key Categories
1. **Entity Data**: `{entity}:{id}:{variant}`
2. **Lookup Data**: `{type}:{key}:{context}`
3. **Report Data**: `report:{type}:{period}`
4. **Configuration**: `config:{service}:{key}`
5. **Session Data**: `session:{user_id}:{context}`

## Cache TTL Strategies

### Data Type TTL Configuration

#### Short TTL (5-15 minutes)
- Session data: 15 minutes
- User permissions: 10 minutes
- Temporary calculations: 5 minutes

#### Medium TTL (1-4 hours)
- Customer data: 2 hours
- Product information: 4 hours
- Invoice summaries: 2 hours
- GST calculations: 4 hours

#### Long TTL (12-24 hours)
- Master data (products, customers): 12 hours
- Report data: 24 hours
- Configuration data: 24 hours
- GST rates: 24 hours

#### Extended TTL (7 days)
- Historical reports: 7 days
- Archive data: 7 days
- System configuration: 7 days

### TTL Strategy Matrix
| Data Type | Base TTL | Extended TTL | Invalidation Strategy |
|-----------|-----------|---------------|----------------------|
| Customer | 2 hours | 12 hours | On update |
| Product | 4 hours | 24 hours | On update |
| Invoice | 2 hours | 12 hours | On status change |
| Report | 24 hours | 7 days | On data change |
| GST Rates | 24 hours | 7 days | Annual update |
| User Session | 15 minutes | 1 hour | On logout |
| Configuration | 24 hours | 7 days | On change |

## Cache Invalidation Policies

### Event-Based Invalidation
1. **Create Events**: Invalidate related list caches
2. **Update Events**: Invalidate specific entity and related caches
3. **Delete Events**: Invalidate all related caches
4. **Status Changes**: Invalidate status-dependent caches

### Invalidation Patterns

#### Entity Update
```javascript
// When invoice is updated
await cache.del(`invoice:${id}:*`);
await cache.del(`customer:${customer_id}:invoices`);
await cache.del(`report:monthly:${current_month}`);
```

#### Status Change
```javascript
// When invoice status changes
await cache.del(`invoice:${id}:*`);
await cache.del(`dashboard:*`);
await cache.del(`reports:outstanding`);
```

#### Bulk Operations
```javascript
// When multiple entities updated
await cache.del(`customer:*`);
await cache.del(`product:*`);
await cache.del(`reports:*`);
```

### Invalidation Hierarchy
1. **Immediate**: Entity-specific caches
2. **Related**: Parent/child relationship caches
3. **Aggregate**: Report and dashboard caches
4. **System**: Configuration and global caches

## Cache Warming Strategies

### Proactive Warming
1. **Startup Warming**: Essential data on application start
2. **Scheduled Warming**: Periodic warming of critical data
3. **Predictive Warming**: Based on usage patterns

### Warming Priority Levels

#### Critical (Immediate)
- Active user sessions
- Current month reports
- Frequently accessed customers
- GST rates and tax calculations

#### High Priority (Within 5 minutes)
- Recent invoices (last 30 days)
- Active product catalog
- User permissions and roles
- Dashboard data

#### Medium Priority (Within 30 minutes)
- Historical reports
- Archive data
- System configuration
- Lookup tables

#### Low Priority (Background)
- Historical data older than 1 year
- Backup calculations
- Analytics aggregates
- System logs

### Warming Implementation
```javascript
// Startup warming
async function warmupCriticalCache() {
  await Promise.all([
    warmupActiveUsers(),
    warmupCurrentMonthReports(),
    warmupGSTRates(),
    warmupFrequentCustomers()
  ]);
}

// Scheduled warming
async function scheduledWarming() {
  await Promise.all([
    warmupRecentInvoices(),
    warmupProductCatalog(),
    warmupDashboardData()
  ]);
}
```

## Cache Performance Monitoring

### Key Metrics
1. **Hit Rate**: Percentage of cache hits vs total requests
2. **Miss Rate**: Percentage of cache misses
3. **Eviction Rate**: Rate of cache evictions
4. **Memory Usage**: Redis memory consumption
5. **Response Time**: Cache operation response times

### Monitoring Targets
- **Hit Rate**: >80% overall, >90% for critical data
- **Response Time**: <10ms for cache operations
- **Memory Usage**: <80% of allocated Redis memory
- **Eviction Rate**: <5% of total operations

### Alerting Thresholds
- Hit rate <70% for 5 consecutive minutes
- Cache response time >50ms
- Redis memory usage >85%
- Error rate >1% for cache operations

## Cache Implementation Architecture

### Service Layer Integration
```javascript
// Base cache service
class CacheService {
  constructor(redisClient) {
    this.redis = redisClient;
    this.defaultTTL = 3600; // 1 hour
  }
  
  async get(key) {
    const value = await this.redis.get(key);
    return value ? JSON.parse(value) : null;
  }
  
  async set(key, value, ttl = this.defaultTTL) {
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }
  
  async del(pattern) {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }
}
```

### Middleware Integration
```javascript
// API caching middleware
const cacheMiddleware = (ttl = 3600) => {
  return async (req, res, next) => {
    const key = `api:${req.method}:${req.originalUrl}`;
    const cached = await cache.get(key);
    
    if (cached) {
      res.json(cached);
      return;
    }
    
    res.locals.cacheKey = key;
    res.locals.cacheTTL = ttl;
    next();
  };
};
```

## Cache Security Considerations

### Data Classification
- **Public Data**: No special restrictions
- **Sensitive Data**: Encrypt before caching
- **PII Data**: Do not cache or use encrypted caching
- **Financial Data**: Short TTL, encrypted storage

### Security Measures
1. **Access Control**: Redis authentication and authorization
2. **Network Security**: Redis cluster network isolation
3. **Data Encryption**: Sensitive data encryption before caching
4. **Audit Logging**: Cache access logging for compliance

## Cache Backup and Recovery

### Backup Strategy
1. **Redis Persistence**: RDB + AOF configuration
2. **Regular Backups**: Daily Redis snapshots
3. **Cross-Region Replication**: Redis cluster replication
4. **Disaster Recovery**: Cache rebuild procedures

### Recovery Procedures
1. **Cache Rebuild**: Automated cache warming from database
2. **Gradual Recovery**: Priority-based cache population
3. **Fallback**: Direct database access during cache rebuild

## Cache Configuration

### Redis Configuration
```conf
# Memory management
maxmemory 2gb
maxmemory-policy allkeys-lru

# Persistence
save 900 1
save 300 10
save 60 10000

# Networking
timeout 300
tcp-keepalive 300
```

### Application Configuration
```javascript
const cacheConfig = {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    db: process.env.REDIS_DB,
    keyPrefix: 'billkar:',
    retryDelayOnFailover: 100,
    maxRetriesPerRequest: 3
  },
  defaults: {
    ttl: 3600,
    enableAutoWarming: true,
    monitoringEnabled: true
  }
};
```

---
**Created**: 2026-04-16  
**Status**: Architecture Complete - Ready for Implementation  
**Next**: Implement Redis cache service and utilities
