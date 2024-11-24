import { z } from 'zod';

const productTypeEnum = z.enum([
  'Mountain',
  'Road',
  'Hybrid',
  'BMX',
  'Electric',
]);

export const createProductSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  brand: z.string().min(1, { message: 'Brand is required' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  type: productTypeEnum,
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z
    .number()
    .int()
    .min(0, { message: 'Quantity must be a positive number' }),
  inStock: z.boolean().default(true),
});

export const updateProductSchema = createProductSchema.partial();
