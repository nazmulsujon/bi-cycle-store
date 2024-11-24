import { Types } from 'mongoose';

export type Order = {
  email: string;
  product: Types.ObjectId | string;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
};
