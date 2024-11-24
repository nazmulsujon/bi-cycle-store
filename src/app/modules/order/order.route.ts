import { Router } from 'express';
import { OrderControllers } from './order.controller';

const router = Router();

// Place an order
router.post('/', OrderControllers.createOrder);

// Calculate total revenue
router.get('/revenue', OrderControllers.calculateRevenue);

export const OrderRoutes = router;
