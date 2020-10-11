import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import bcryptjs from 'bcryptjs'
const User = require('../models/User')

export const userAuth = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (!user) return res.status(400).json({ msg: 'User no exist' })

        const matchedPassword = await bcryptjs.compare(password, user.password)
        if (!matchedPassword) return res.status(400).json({ msg: 'Incorrect password' })

        const payload = { user: { id: user.id } }

        jwt.sign(payload, process.env.SECRET, { expiresIn: '1 day' }, (error, token) => {
            if (error) throw error

            res.json({ token })
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server Error'})
    }
}