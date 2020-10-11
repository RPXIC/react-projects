import { Router } from 'express'
const router = Router()
import { addTask, getTasks, updateTask, deleteTask } from '../controllers/taskController'
import jwtVerifyer from '../middlewares/auth'
import { check } from 'express-validator'

router.post('/', jwtVerifyer, 
    [ check('name', 'Name is required').not().isEmpty() ], 
    [ check('project', 'Project is required').not().isEmpty() ], 
    addTask
)

router.get('/', jwtVerifyer, getTasks)

router.put('/:id', jwtVerifyer, updateTask)

router.delete('/:id', jwtVerifyer, deleteTask)

export default router