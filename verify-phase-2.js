#!/usr/bin/env node
/**
 * Phase 2 Backend Services Automated Verification Script
 * Verifies all 23 services exist and have proper structure
 */

const fs = require('fs');
const path = require('path');

const SERVICES_DIR = path.join(__dirname, 'balnce/src/modules/core/services');
const UTILS_DIR = path.join(__dirname, 'balnce/src/utils');
const MIGRATIONS_DIR = path.join(__dirname, 'balnce/migrations');

// Define all expected services
const EXPECTED_SERVICES = [
  // Database & Performance (7 services)
  { name: 'QueryOptimizer', file: 'QueryOptimizer.js', category: 'Database' },
  { name: 'ConnectionPool', file: 'ConnectionPool.js', category: 'Database' },
  { name: 'ReadReplicaManager', file: 'ReadReplicaManager.js', category: 'Database' },
  { name: 'DatabaseMonitor', file: 'DatabaseMonitor.js', category: 'Database' },
  { name: 'BackupManager', file: 'BackupManager.js', category: 'Database' },
  { name: 'RedisCache', file: 'RedisCache.js', category: 'Caching' },
  { name: 'ApplicationCache', file: 'ApplicationCache.js', category: 'Caching' },
  
  // Caching Optimization (4 services)
  { name: 'CacheStrategyOptimizer', file: 'CacheStrategyOptimizer.js', category: 'Caching' },
  { name: 'CacheInvalidationManager', file: 'CacheInvalidationManager.js', category: 'Caching' },
  { name: 'CacheMonitor', file: 'CacheMonitor.js', category: 'Caching' },
  { name: 'CachePerformanceOptimizer', file: 'CachePerformanceOptimizer.js', category: 'Caching' },
  
  // Monitoring & Observability (3 services)
  { name: 'StructuredLogger', file: 'StructuredLogger.js', category: 'Monitoring' },
  { name: 'LogAggregator', file: 'LogAggregator.js', category: 'Monitoring' },
  { name: 'APMService', file: 'APMService.js', category: 'Monitoring' },
  
  // Health & Alerting (3 services)
  { name: 'HealthCheckService', file: 'HealthCheckService.js', category: 'Alerting' },
  { name: 'AlertingService', file: 'AlertingService.js', category: 'Alerting' },
  { name: 'NotificationService', file: 'NotificationService.js', category: 'Alerting' },
  
  // Security & Compliance (5 services)
  { name: 'AuthenticationService', file: 'AuthenticationService.js', category: 'Security' },
  { name: 'AuthorizationService', file: 'AuthorizationService.js', category: 'Security' },
  { name: 'EncryptionService', file: 'EncryptionService.js', category: 'Security' },
  { name: 'SecurityAuditService', file: 'SecurityAuditService.js', category: 'Security' },
  { name: 'ComplianceService', file: 'ComplianceService.js', category: 'Security' },
  { name: 'SecurityMonitoringService', file: 'SecurityMonitoringService.js', category: 'Security' }
];

const MIGRATION_FILES = [
  '001-optimize-queries.sql',
  '002-performance-optimization.sql',
  '003-strategic-indexes.sql',
  '004-schema-optimization.sql'
];

class Phase2Verifier {
  constructor() {
    this.results = {
      passed: [],
      failed: [],
      warnings: []
    };
  }

  async verifyAll() {
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║  Phase 2 Backend Services - Automated Verification    ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    
    // Verify services directory exists
    if (!fs.existsSync(SERVICES_DIR)) {
      console.error(`❌ Services directory not found: ${SERVICES_DIR}`);
      process.exit(1);
    }
    
    // Verify each service
    for (const service of EXPECTED_SERVICES) {
      await this.verifyService(service);
    }
    
    // Verify migration files
    await this.verifyMigrations();
    
    // Verify utilities
    await this.verifyUtilities();
    
    // Print summary
    this.printSummary();
    
    return this.results;
  }

  async verifyService(service) {
    const filePath = path.join(SERVICES_DIR, service.file);
    const checks = {
      exists: false,
      hasClass: false,
      hasInitialize: false,
      hasHealthCheck: false,
      extendsEventEmitter: false,
      hasErrorHandling: false,
      hasConfig: false
    };
    
    // Check file exists
    if (!fs.existsSync(filePath)) {
      this.results.failed.push({
        name: service.name,
        category: service.category,
        error: 'File not found'
      });
      console.log(`❌ ${service.name}: File not found`);
      return;
    }
    checks.exists = true;
    
    // Read file content
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check class definition
    checks.hasClass = /class\s+\w+/.test(content);
    checks.hasInitialize = /initialize\s*\(/.test(content);
    checks.hasHealthCheck = /healthCheck|health_check/.test(content);
    checks.extendsEventEmitter = /extends\s+EventEmitter|EventEmitter\.call/.test(content);
    checks.hasErrorHandling = /try\s*{|catch\s*\(|throw\s+new/.test(content);
    checks.hasConfig = /config|Config/.test(content);
    
    // Calculate score
    const score = Object.values(checks).filter(Boolean).length;
    const totalChecks = Object.keys(checks).length;
    const percentage = Math.round((score / totalChecks) * 100);
    
    if (percentage >= 80) {
      this.results.passed.push({
        name: service.name,
        category: service.category,
        score: percentage,
        checks
      });
      console.log(`✅ ${service.name}: ${percentage}% (${score}/${totalChecks} checks)`);
    } else if (percentage >= 50) {
      this.results.warnings.push({
        name: service.name,
        category: service.category,
        score: percentage,
        checks
      });
      console.log(`⚠️  ${service.name}: ${percentage}% (${score}/${totalChecks} checks)`);
    } else {
      this.results.failed.push({
        name: service.name,
        category: service.category,
        score: percentage,
        checks
      });
      console.log(`❌ ${service.name}: ${percentage}% (${score}/${totalChecks} checks)`);
    }
  }

  async verifyMigrations() {
    console.log('\n📁 Verifying Migration Files...\n');
    
    for (const migration of MIGRATION_FILES) {
      const filePath = path.join(MIGRATIONS_DIR, migration);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`✅ ${migration}: ${(stats.size / 1024).toFixed(2)} KB`);
        this.results.passed.push({
          name: migration,
          category: 'Migration',
          score: 100
        });
      } else {
        console.log(`❌ ${migration}: Not found`);
        this.results.failed.push({
          name: migration,
          category: 'Migration',
          error: 'File not found'
        });
      }
    }
  }

  async verifyUtilities() {
    console.log('\n🔧 Verifying Utility Files...\n');
    
    const utilities = ['logger.js', 'response.js', 'errorHandler.js'];
    for (const util of utilities) {
      const filePath = path.join(UTILS_DIR, util);
      if (fs.existsSync(filePath)) {
        console.log(`✅ ${util}: Found`);
        this.results.passed.push({
          name: util,
          category: 'Utility',
          score: 100
        });
      } else {
        console.log(`❌ ${util}: Not found`);
        this.results.warnings.push({
          name: util,
          category: 'Utility',
          error: 'File not found'
        });
      }
    }
  }

  printSummary() {
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║                    SUMMARY REPORT                      ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    
    const total = this.results.passed.length + this.results.failed.length + this.results.warnings.length;
    const passRate = Math.round((this.results.passed.length / total) * 100);
    
    console.log(`Total Services: ${total}`);
    console.log(`✅ Passed: ${this.results.passed.length}`);
    console.log(`⚠️  Warnings: ${this.results.warnings.length}`);
    console.log(`❌ Failed: ${this.results.failed.length}`);
    console.log(`\nSuccess Rate: ${passRate}%\n`);
    
    // Group by category
    const byCategory = {};
    for (const item of [...this.results.passed, ...this.results.warnings, ...this.results.failed]) {
      if (!byCategory[item.category]) {
        byCategory[item.category] = { passed: 0, failed: 0, warnings: 0 };
      }
      if (this.results.passed.includes(item)) byCategory[item.category].passed++;
      else if (this.results.failed.includes(item)) byCategory[item.category].failed++;
      else byCategory[item.category].warnings++;
    }
    
    console.log('By Category:');
    for (const [category, counts] of Object.entries(byCategory)) {
      const catTotal = counts.passed + counts.failed + counts.warnings;
      const catRate = Math.round((counts.passed / catTotal) * 100);
      console.log(`  ${category}: ${catRate}% (${counts.passed}/${catTotal})`);
    }
    
    // List failed items
    if (this.results.failed.length > 0) {
      console.log('\n❌ Failed Items:');
      for (const item of this.results.failed) {
        console.log(`  - ${item.name}: ${item.error || `Score: ${item.score}%`}`);
      }
    }
    
    // List warnings
    if (this.results.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      for (const item of this.results.warnings) {
        console.log(`  - ${item.name}: Score: ${item.score}%`);
      }
    }
    
    console.log('\n═══════════════════════════════════════════════════════════\n');
    
    if (this.results.failed.length === 0) {
      console.log('🎉 All services verified successfully!\n');
      process.exit(0);
    } else {
      console.log(`⚠️  ${this.results.failed.length} service(s) need attention\n`);
      process.exit(1);
    }
  }
}

// Run verification
const verifier = new Phase2Verifier();
verifier.verifyAll().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
