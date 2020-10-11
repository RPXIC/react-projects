const Task = require('../models/Task')
const Project = require('../models/Project')
import { validationResult } from 'express-validator'

export const addTask = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { project } = req.body
    
    try {
        const projectExist = await Project.findById(project)

        if (!projectExist) return res.status(404).json({ msg: 'Project not foud'})

        if (projectExist.owner.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized'})

        const task = new Task(req.body)

        await task.save()

        res.json({task})

    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

export const getTasks = async (req, res) => {
    try {

        const { project } = req.body

        const projectExist = await Project.findById(project)

        if (!projectExist) return res.status(404).json({ msg: 'Project not foud'})

        if (projectExist.owner.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized'})

        const tasks = await Task.find({ project })

        res.json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

export const updateTask = async (req, res) => {
    try {
        const { project, name, state } = req.body

        let task = await Task.findById(req.params.id)
        if (!task) return res.status(404).json({ msg: 'Task not foud'})
        
        const projectExist = await Project.findById(project)
        if (!projectExist) return res.status(404).json({ msg: 'Project not foud'})

        if (projectExist.owner.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized'})

        const newTask = {}
        if (name) newTask.name = name
        if (state) newTask.state = state

        task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, { new: true })

        res.json({task})

    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { project } = req.body

        let task = await Task.findById(req.params.id)
        if (!task) return res.status(404).json({ msg: 'Task not foud'})
        
        const projectExist = await Project.findById(project)
        if (!projectExist) return res.status(404).json({ msg: 'Project not foud'})

        if (projectExist.owner.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized'})

        await Task.findOneAndRemove({ _id: req.params.id })

        res.json({msg: 'Task Deleted'})

    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}