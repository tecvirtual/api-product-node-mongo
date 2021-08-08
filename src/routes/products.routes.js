import { Router } from "express";
const router = Router()

import * as productController from '../controllers/products.controller'

router.get('/', productController.getProducts)
router.post('/', productController.createProduct)
router.get('/:productId', productController.getProductById)
router.put('/:productId', productController.updateProductById)
router.delete('/:productId', productController.deleteProduct)

export default router;