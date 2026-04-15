# Project Structure

## Backend Structure (balnce/)
`
balnce/
src/
  controllers/     # API endpoint handlers
  models/         # Database models (Sequelize)
  routes/         # API route definitions
  services/       # Business logic layer
  middleware/     # Express middleware
  utils/          # Utility functions
  config/         # Configuration files
tests/            # Backend tests
scripts/          # Build and deployment scripts
docs/             # Documentation
`

## Frontend Structure (balnce-frontend/)
`
balnce-frontend/
src/
  components/     # React components
  pages/          # Page-level components
  hooks/          # Custom React hooks
  utils/          # Utility functions
  services/       # API service functions
  styles/         # CSS/Tailwind styles
  assets/         # Static assets
tests/            # Frontend tests
public/           # Public static files
`

## Configuration Files
### Backend
- .env: Environment variables
- package.json: Dependencies and scripts
- Dockerfile: Container configuration
- docker-compose.yml: Multi-container setup
- ecosystem.config.js: PM2 configuration

### Frontend
- ite.config.ts: Vite build configuration
- 	ailwind.config.ts: Tailwind CSS configuration
- playwright.config.ts: E2E testing setup
- 	sconfig.json: TypeScript configuration

## Documentation Structure
- API_GUIDE.md: API usage documentation
- TECHNICAL_ARCHITECTURE.md: Detailed architecture docs
- DEPLOYMENT.md: Deployment instructions
- openapi.yaml: API specification
