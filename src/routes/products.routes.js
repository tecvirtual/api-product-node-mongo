import { Router } from "express";
const router = Router()

import * as productController from '../controllers/products.controller'
import { auth } from "../middelewares"

router.get('/', productController.getProducts)
router.post('/', [auth.verifyToken, auth.isAdmin ], productController.createProduct)
router.get('/:productId', productController.getProductById)
router.put('/:productId', [auth.verifyToken, auth.isModerator ], productController.updateProductById)
router.delete('/:productId', [auth.verifyToken, auth.isAdmin, auth.isModerator ], productController.deleteProduct)

export default router;