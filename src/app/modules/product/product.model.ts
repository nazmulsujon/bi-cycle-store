import { model, Schema } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      required: true,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const ProductModel = model<Product>('Product', productSchema);
