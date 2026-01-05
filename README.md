# wrap-framework-sample

W – Write effective issues|R – Refine your instructions|A – Atomic tasks|P – Pair with the coding agent

A minimal Node.js + TypeScript API skeleton for WRAP experiments.

## Prerequisites

- Node.js >= 18.0.0
- npm

## Quick Start

### Installation

```bash
npm ci
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Run

```bash
npm run dev
```

The server will start on `http://localhost:3000` (default port).

To use a different port:

```bash
PORT=8080 npm run dev
```

### Health Check

Once the server is running, test the health endpoint:

```bash
curl http://localhost:3000/healthz
```

Expected response:

```json
{"status":"ok"}
```

## Available Scripts

- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run tests with Jest
- `npm run lint` - Lint code with ESLint

## Project Structure

```
.
├── src/           # Application source code
│   ├── app.ts     # Express app configuration
│   └── index.ts   # Server entry point
├── test/          # Test files
├── dist/          # Build output (generated)
└── .github/
    └── copilot-instructions.md  # Development guidelines
```

## License

MIT
