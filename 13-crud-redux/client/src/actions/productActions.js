import { 
    ADD_PRODUCT, 
    ADD_PRODUCT_OK, 
    ADD_PRODUCT_ERROR, 
    RETRIEVE_PRODUCTS, 
    RETRIEVE_PRODUCTS_OK, 
    RETRIEVE_PRODUCTS_ERROR,
    DELETE_PRODUCT, 
    DELETE_PRODUCT_OK, 
    DELETE_PRODUCT_ERROR,
    SELECT_EDIT_PRODUCT,
    EDIT_PRODUCT_OK,
    EDIT_PRODUCT_ERROR
} from 'types'
import axiosClient from 'config/axios'
import Swal from 'sweetalert2'

export const addNewProductAction = product => {
    return async (dispatch) => {
        dispatch( addProduct() )

        try {
            await axiosClient.post('/products', product)

            dispatch( addProductOk(product) )

            Swal.fire(
                'Right',
                'The product was added successfully',
                'success'
            )
        } catch (error) {
            dispatch( addProductError(true) )

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred, try again'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

const addProductOk = product => ({
    type: ADD_PRODUCT_OK,
    payload: product
})

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})

export const retrieveProductsAction = () => {
    return async (dispatch) => {
        dispatch ( retrieveProducts() )

        try {
            const res = await axiosClient.get('./products')
            dispatch( retrieveProductsOk(res.data) )
        } catch (error) {
            dispatch( retrieveProductsError() )
        }
    }
}

const retrieveProducts = () => ({
    type: RETRIEVE_PRODUCTS,
    payload: true
})

const retrieveProductsOk = products => ({
    type: RETRIEVE_PRODUCTS_OK,
    payload: products
})

const retrieveProductsError = () => ({
    type: RETRIEVE_PRODUCTS_ERROR,
    payload: true
})

export const deleteProductAction = id => {
    return async (dispatch) => {
        dispatch( deleteProduct(id) )

        try {
            await axiosClient.delete(`/products/${id}`)
            dispatch( deleteProductOk () )
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            dispatch( deleteProductError() )
        }
    }
}

const deleteProduct = id => ({
    type: DELETE_PRODUCT,
    payload: id
})

const deleteProductOk = () => ({
    type: DELETE_PRODUCT_OK
})

const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
})

export const selectEditProductAction = product => {
    return (dispatch) => {
        dispatch( selectEditProduct(product) )
    }
}

const selectEditProduct = product => ({
    type: SELECT_EDIT_PRODUCT,
    payload: product
})

export const editProductAction = product => {
    return async (dispatch) => {
        try {
            if (product.name.trim() === '' || !product.price) return dispatch( editProductError() )

            await axiosClient.put(`/products/${product.id}`, product)
            dispatch ( editProductOk(product) )
        } catch (error) {
            dispatch( editProductError() )
        }
    }
}

const editProductOk = product => ({
    type: EDIT_PRODUCT_OK,
    payload: product
})

const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
})