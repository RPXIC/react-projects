import { Schema, model } from 'mongoose'

const TaskSchema = Schema({
    name: { type: String, required: true, trim: true },
    state: { type: Boolean, required: true, default: false},
    created: { type: Date, default: Date.now() },
    project: { type: Schema.Types.ObjectId, ref: 'Project' }
})

module.exports = model('Task', TaskSchema)