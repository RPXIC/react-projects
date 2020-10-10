import { Schema, model } from 'mongoose'

const ProjectSchema = Schema({
    name: { type: String, required: true, trim: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    created: { type: Date, default: Date.now() }
})

module.exports = model('Project', ProjectSchema)