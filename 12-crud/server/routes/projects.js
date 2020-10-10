import { Router } from 'express'
const router = Router()
import { createProject, getProjects, updateProject, deleteProject } from '../controllers/projectController'
import jwtVerifyer from '../middlewares/auth'
import { check } from 'express-validator'

router.post('/', jwtVerifyer, [ check('name', 'Name is required').not().isEmpty() ], createProject)

router.get('/', jwtVerifyer, getProjects )

router.put('/:id', jwtVerifyer, [ check('name', 'Name is required').not().isEmpty() ], updateProject )

router.delete('/:id', jwtVerifyer, deleteProject )

export default router