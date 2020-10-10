import jwt from 'jsonwebtoken'

const jwtVerifyer = (req, res, next) => {
    const token = req.header('x-auth-token')

    if (!token) return res.status(401).json({ msg: 'No token, invalid permission' })

    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(401).json({ msg: 'Invalid Token' })
    }
}

export default jwtVerifyer