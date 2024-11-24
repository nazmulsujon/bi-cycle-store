import { Request, Response, NextFunction } from 'express';
import { OrderServices } from './order.service';
import { createOrderSchema } from './order.validation';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate input using Zod
    const parsedOrder = createOrderSchema.parse(req.body);

    // Delegate the creation logic to the service
    const order = await OrderServices.createOrderInDB(parsedOrder);

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
  } catch (error) {
    next(error); // Forward error to middleware
  }
};

const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Delegate the revenue calculation to the service
    const totalRevenue = await OrderServices.calculateTotalRevenueFromDB();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (error) {
    next(error); // Forward error to middleware
  }
};

export const OrderControllers = {
  createOrder,
  calculateRevenue,
};
