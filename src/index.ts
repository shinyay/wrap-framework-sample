import { createApp } from './app';

const DEFAULT_PORT = 3000;
const rawPort = process.env.PORT;
const PORT = (() => {
  if (!rawPort) {
    return DEFAULT_PORT;
  }
  const parsedPort = parseInt(rawPort, 10);
  if (Number.isNaN(parsedPort) || parsedPort < 1 || parsedPort > 65535) {
    console.warn(
      `Invalid PORT value "${rawPort}". Falling back to default port ${DEFAULT_PORT}.`,
    );
    return DEFAULT_PORT;
  }
  return parsedPort;
})();

const app = createApp();

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/healthz`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
