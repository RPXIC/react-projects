import { Router } from 'express'
const router = Router()
import { userAuth } from '../controllers/authController'
import { check } from 'express-validator'

router.post('/',
    [
        check('email', 'The email is not valid').isEmail(),
        check('password', 'The password must have a minimum of 6 characters').isLength({ min: 6 })
    ],
    userAuth
)

export default router
