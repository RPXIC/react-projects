import { Schema, model } from 'mongoose'

const ProductSchema = Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, trim: true }
})

module.exports = model('Product', ProductSchema)