import express, { Express, Request, Response } from 'express';

export function createApp(): Express {
  const app = express();
  
  app.use(express.json());
  
  // Health check endpoint
  app.get('/healthz', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
  });
  
  return app;
}
