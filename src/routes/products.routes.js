import { Router } from "express";
const router = Router()

router.get('/products', (req, res) => res.json('get products'))

export default router;