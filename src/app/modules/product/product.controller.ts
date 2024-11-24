import { Request, Response, NextFunction } from 'express';
import { ProductServices } from './product.service';
import { createProductSchema, updateProductSchema } from './product.validation';
import { console } from 'inspector';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validate input using Zod
    const parsedProduct = createProductSchema.parse(req.body);
    const product = await ProductServices.createProductInDB(parsedProduct);

    res.status(201).json({
      message: 'Bicycle created successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    next(error); // Forward error to middleware
  }
};

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const products = await ProductServices.getProductsFromDB(searchTerm);
    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      success: true,
      data: products,
    });
  } catch (error) {
    next(error); // Forward error to middleware
  }
};

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await ProductServices.getSingleProductFromDB(
      req.params.productId,
    );
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    next(error); // Forward error to middleware
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validate input using Zod
    const parsedProduct = updateProductSchema.parse(req.body);
    const productId = req.params.productId;

    const product = await ProductServices.updateProductInDB(
      productId,
      parsedProduct,
    );

    res.status(200).json({
      message: 'Bicycle updated successfully',
      success: true,
      data: {
        ...product,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error); // Forward error to middleware
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await ProductServices.deleteProductFromDB(req.params.productId);
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
