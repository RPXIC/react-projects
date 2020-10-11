import express from 'express'
import connectDB from './config/db'
import { userAuth, users, projects, tasks } from './routes'

const app = express()

connectDB()

app.use(express.json({ extended: true }))

const PORT = process.env.PORT || 4000

app.use('/api/users', users)
app.use('/api/auth', userAuth)
app.use('/api/projects', projects)
app.use('/api/tasks', tasks)

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => console.log(`Server up on port ${PORT}`))