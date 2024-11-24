import { Order } from './order.interface';
import { OrderModel } from './order.model';
import { ProductModel } from '../product/product.model';

const createOrderInDB = async (order: Order) => {
  // Validate product existence
  const product = await ProductModel.findById(order.product);
  if (!product) {
    throw new Error('Product not found');
  }

  // Check stock availability
  if (product.quantity < order.quantity) {
    throw new Error('Insufficient stock');
  }

  // Update product inventory
  product.quantity -= order.quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  // Create the order
  const createdOrder = await OrderModel.create(order);

  return createdOrder.toObject();
};

const calculateTotalRevenueFromDB = async () => {
  // Aggregate revenue using MongoDB pipeline
  const revenue = await OrderModel.aggregate([
    {
      $group: {
        _id: null, // Group all orders
        totalRevenue: { $sum: '$totalPrice' }, // Sum the totalPrice
      },
    },
  ]);

  return revenue[0]?.totalRevenue || 0; // Return 0 if no revenue
};

export const OrderServices = {
  createOrderInDB,
  calculateTotalRevenueFromDB,
};
