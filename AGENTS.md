# AGENTS.md - Billkar ERP

## Project Structure
- `balnce/`: Node.js/Express backend (Sequelize + MySQL + Redis). Entry: `src/server.js`.
- `balnce-frontend/`: React 19 + Vite + Redux Toolkit. Domain-driven modules in `src/modules/`.
- `.planning/`: GSD workflow directory.

## Commands
### Backend (`balnce/`)
```bash
npm run dev          # Start dev server (nodemon)
npm run db:migrate   # Run migrations
npm test             # Full test suite (DROPS test DB, creates, migrates, seeds, runs Jest)
npm run audit:gates  # Verify audit matrix, boundaries, and pagination
```

### Frontend (`balnce-frontend/`)
```bash
npm install --legacy-peer-deps   # Never omit flag
npm run dev                      # Start Vite
npm run quality:gates            # lint suppressions + OpenAPI types + type-check
npm run types:openapi:generate   # Regenerate API types from backend OpenAPI spec
```

## Important Context
- **Command Order**: 
  - Backend: `lint` -> `test`
  - Frontend: `lint` -> `type-check` -> `quality:gates` -> `test:unit`
- **Module Aliases**: Backend uses `@` for `src/` (via `module-alias`).
- **OpenAPI Sync**: Frontend types are generated from `../balnce/openapi.yaml`. Run `quality:gates` to verify sync.
- **Tenant Isolation**: Backend enforces `company_id` isolation via Sequelize default scopes and hooks. Never attempt to modify `company_id` on existing records.
- **Dynamic Routing**: Backend routes are auto-mounted from `src/modules/**/*.routes.js`. Check `src/modules/core/routes/index.js` for mapping logic (e.g., `product` -> `/items`).
- **Frontend Quirks**: Always use `--legacy-peer-deps`. API types live in `src/services/api/types/schema.d.ts`.
- **Backend Tests**: `npm test` is destructive to the test database. Do not run in production environments.
