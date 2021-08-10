import { Router } from "express";
import * as authContoller from '../controllers/auth.controller'

const router = Router()

router.post('/login', authContoller.login)
router.post('/register', authContoller.register)

export default router;