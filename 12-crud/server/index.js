import express from 'express'
import connectDB from './config/db'
import cors from 'cors'
import { userAuth, users, projects, tasks } from './routes'

const app = express()

connectDB()

app.use(cors())

app.use(express.json({ extended: true }))

const port = process.env.port || 4000

app.use('/api/users', users)
app.use('/api/auth', userAuth)
app.use('/api/projects', projects)
app.use('/api/tasks', tasks)

app.listen(port, '0.0.0.0', () => console.log(`Server up on port ${port}`))