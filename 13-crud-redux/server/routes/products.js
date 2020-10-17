import { Router } from 'express'
const router = Router()
import { retrieveProducts, addProduct, deleteProduct, editProduct } from '../controllers/productController'

router.get('/', retrieveProducts)
router.post('/', addProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', editProduct)


export default router
