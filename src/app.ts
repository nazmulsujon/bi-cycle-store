import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { errorHandler } from './app/utils/error-handler';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

// Product routes
app.use('/api/products', ProductRoutes);

// order routes
app.use('/api/orders', OrderRoutes);

// Basic route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Global error handling middleware
app.use(errorHandler);

export default app;
