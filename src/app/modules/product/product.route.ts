import { Router } from 'express';
import { ProductControllers } from './product.controller';

const router = Router();

router.get('/', ProductControllers.getAllProducts);
router.post('/', ProductControllers.createProduct);
router.get('/:productId', ProductControllers.getSingleProduct);
router.put('/:productId', ProductControllers.updateProduct);
router.delete('/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = router;
