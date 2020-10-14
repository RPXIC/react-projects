import { Router } from 'express'
const router = Router()
import { userAuth, getUser } from '../controllers/authController'
import jwtVerifyer from '../middlewares/auth'

router.post('/', userAuth)

router.get('/', jwtVerifyer, getUser)

export default router
