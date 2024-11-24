import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { errorHandler } from './app/utils/error-handler';

const app: Application = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

// Product routes
app.use('/api/products', ProductRoutes);

// Basic route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Global error handling middleware
app.use(errorHandler);

export default app;
