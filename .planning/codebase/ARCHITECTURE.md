# System Architecture

## High-Level Architecture
This is a full-stack web application with a clear separation between frontend and backend:

### Backend Architecture (balnce/)
- **Layered Architecture:** Controller -> Service -> Model pattern
- **REST API Design:** Resource-oriented endpoints
- **Database Layer:** Sequelize ORM with PostgreSQL
- **Authentication Layer:** JWT-based authentication system

### Frontend Architecture (balnce-frontend/)
- **Component-Based Architecture:** React components
- **State Management:** Likely React hooks/context
- **Routing:** Client-side routing (React Router)
- **Build System:** Vite for development and production builds

## Data Flow
1. **Frontend** makes HTTP requests to **Backend API**
2. **Backend** validates requests and authenticates users
3. **Business Logic** is processed in service layers
4. **Database** operations handled by Sequelize models
5. **Response** flows back through the same path

## Security Architecture
- **Authentication:** JWT tokens
- **Authorization:** Role-based access control
- **Environment Variables:** Sensitive configuration protection
- **CORS:** Cross-origin request security

## Deployment Architecture
- **Containerized:** Docker containers for both frontend and backend
- **Reverse Proxy:** Nginx for serving static files and API proxying
- **Process Management:** PM2 for Node.js process management
- **Monitoring:** Grafana dashboards and Prometheus metrics
