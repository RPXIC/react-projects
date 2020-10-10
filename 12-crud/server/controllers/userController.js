import bcryptjs from 'bcryptjs'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
const User = require('../models/User')

export const createUser = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if (user) return res.status(400).json({ msg: 'This email is already registered' })

        user = new User(req.body)

        const salt = await bcryptjs.genSalt(10)
        user.password = await bcryptjs.hash(password, salt)

        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.SECRET, { expiresIn: '1 day' }, (error, token) => {
            if (error) throw error

            res.json({ token })
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send('Register error')
    }
}