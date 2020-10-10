import { Router } from 'express'
const router = Router()
import {createUser} from '../controllers/userController'
import { check } from 'express-validator'

router.post('/',
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is not valid').isEmail(),
        check('password', 'The password must have a minimum of 6 characters').isLength({ min: 6 })
    ],
    createUser
)

export default router