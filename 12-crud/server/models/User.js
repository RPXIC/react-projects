import { Schema, model } from 'mongoose'

const UsersSchema = Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    registered: { type: Date, default: Date.now() }
})

module.exports = model('User', UsersSchema)