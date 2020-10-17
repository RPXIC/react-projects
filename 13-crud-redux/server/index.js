import express from 'express'
import connectDB from './config/db'
import cors from 'cors'
import products from './routes/products'

const app = express()

connectDB()

app.use(cors())

app.use(express.json({ extended: true }))

const port = process.env.PORT || 4000

app.use('/products', products)

app.listen(port, () => console.log(`Server up on port ${port}`))