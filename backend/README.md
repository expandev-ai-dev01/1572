# Comida Japonesa - Backend API

Backend API for Japanese Restaurant website.

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

### Production

Start production server:
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API Routes
- `/api/v1/external/*` - Public endpoints
- `/api/v1/internal/*` - Authenticated endpoints

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `API_VERSION` - API version (default: v1)
- `CORS_ORIGINS` - Allowed CORS origins (comma-separated)

## Features

Features will be implemented following the modular architecture:
- Each feature in its own directory under `src/api/v1/`
- Business logic in `src/services/`
- Shared utilities in `src/utils/`

## Contributing

Follow the established patterns in the codebase:
- Use TypeScript strict mode
- Follow naming conventions (camelCase for files, PascalCase for types)
- Include proper error handling
- Add TSDoc comments for all functions
- Write tests for new features

## License

ISC
