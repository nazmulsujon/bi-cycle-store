import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductInDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return {
    ...result.toObject(),
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  };
};

const getProductsFromDB = async (searchTerm?: string) => {
  const filter = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { type: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};
  return await ProductModel.find(filter);
};

const getSingleProductFromDB = async (id: string) => {
  const product = await ProductModel.findById(id);
  if (!product) throw new Error('Product not found');
  return product.toObject();
};

const updateProductInDB = async (id: string, updatedData: Partial<Product>) => {
  const product = await ProductModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  if (!product) throw new Error('Product not found');
  return product.toObject();
};

const deleteProductFromDB = async (id: string) => {
  const product = await ProductModel.findByIdAndDelete(id);
  if (!product) throw new Error('Product not found');
};

export const ProductServices = {
  createProductInDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
