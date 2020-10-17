const Product = require('../models/Product')
import sanitize from '../utils/sanitize'

export const retrieveProducts = async (req, res) => {
    try {
        const products = await Product.find()
        const sanitizedProducts = products.map(product => sanitize(product))
        res.json(sanitizedProducts)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server Error'})
    }
}

export const addProduct = async (req, res) => {
    const { name, price } = req.body

    try {
        const product = new Product({name, price})
        await product.save()
        res.json({msg: 'Product Added'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server Error'})
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        await Product.findOneAndRemove({ _id: id })
        res.json({msg: 'Product Deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server Error'})
    }
}

export const editProduct = async (req, res) => {
    const { id } = req.params
    const { name,  price } = req.body

    try {
        const product = await Product.findById(id)
        if (!product) return res.status(404).json({ msg: 'Product not foud'})

        const newProduct = {
            name: name,
            price: price
        }

        await Product.findOneAndUpdate({ _id: id }, newProduct, { new: true })

        res.json({msg: 'Product Updated'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server Error'})
    }
}
