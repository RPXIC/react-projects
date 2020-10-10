import { validationResult } from 'express-validator'
const Project = require('../models/Project')

export const createProject = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    try {
        const project = new Project(req.body)
        project.owner = req.user.id
        project.save()
        res.json(project)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ owner: req.user.id })
        res.json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

export const updateProject = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { name } = req.body

    let newProject = {}

    if (name) newProject.name = name

    try {
        let project = await Project.findById(req.params.id)

        if (!project) return res.status(404).json({ msg: 'Project not found'})

        if (project.owner.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized'})

        project = await Project.findOneAndUpdate({ _id: req.params.id }, { $set: newProject}, { new: true })

        res.json({project})
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

export const deleteProject = async (req, res) => {

    try {
        let project = await Project.findById(req.params.id)

        if (!project) return res.status(404).json({ msg: 'Project not found'})

        if (project.owner.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized'})

        await Project.findOneAndRemove({ _id: req.params.id })

        res.json({ msg: 'Project Deleted' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}