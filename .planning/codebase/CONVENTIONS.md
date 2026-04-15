# Code Conventions

## Backend Conventions (balnce/)
### Code Style
- **Linting:** ESLint configuration in .eslintrc.json
- **Formatting:** Prettier configuration in .prettierrc
- **Pre-commit hooks:** Husky for code quality checks
- **Git hooks:** Lint-staged for staged file checks

### File Naming
- **Controllers:** CamelCase (e.g., userController.js)
- **Models:** PascalCase (e.g., User.js)
- **Services:** CamelCase with Service suffix (e.g., userService.js)
- **Routes:** Descriptive names (e.g., userRoutes.js)

### API Conventions
- **RESTful endpoints:** Resource-oriented URLs
- **HTTP status codes:** Proper status code usage
- **Error handling:** Consistent error response format
- **Validation:** Input validation middleware

## Frontend Conventions (balnce-frontend/)
### Code Style
- **Linting:** ESLint with React-specific rules
- **Formatting:** Prettier with consistent configuration
- **TypeScript:** Strong typing throughout
- **CSS:** Tailwind CSS utility classes

### Component Conventions
- **Naming:** PascalCase for components
- **File structure:** Component + styles + tests in same folder
- **Props interface:** TypeScript interfaces for props
- **Hooks:** Custom hooks prefixed with "use"

### State Management
- **Local state:** React hooks (useState, useEffect)
- **Global state:** Context API where needed
- **API state:** Custom hooks for data fetching

## General Project Conventions
### Git Workflow
- **Branch naming:** descriptive/feature-name
- **Commit messages:** Conventional Commits format
- **Pull requests:** Code review required
- **Merge strategy:** Squash merge for clean history

### Environment Management
- **Development:** .env files with clear documentation
- **Production:** Environment-specific configurations
- **Secrets:** Never committed to repository

## Documentation Conventions
- **README:** Clear setup and usage instructions
- **API docs:** OpenAPI specification maintained
- **Code comments:** JSDoc for complex functions
- **Changelog:** Version changes documented
