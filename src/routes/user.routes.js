import { Router } from "express";
const router = Router()

import * as UserController from '../controllers/user.controller'
import { auth, validator } from '../middelewares'

router.post('/', [auth.verifyToken, auth.isModerator, validator.checkedRoleExisted ], UserController.createUser)

export default router;