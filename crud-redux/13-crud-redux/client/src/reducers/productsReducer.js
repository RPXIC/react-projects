import { 
    ADD_PRODUCT, 
    ADD_PRODUCT_OK, 
    ADD_PRODUCT_ERROR, 
    RETRIEVE_PRODUCTS_OK, 
    RETRIEVE_PRODUCTS_ERROR, 
    RETRIEVE_PRODUCTS,
    DELETE_PRODUCT, 
    DELETE_PRODUCT_OK, 
    DELETE_PRODUCT_ERROR,
    SELECT_EDIT_PRODUCT,
    EDIT_PRODUCT_OK,
    EDIT_PRODUCT_ERROR
} from 'types'

const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null,
    editproduct: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCT:
        case RETRIEVE_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_OK:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case RETRIEVE_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case RETRIEVE_PRODUCTS_OK:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload
            }
        case DELETE_PRODUCT_OK:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.deleteProduct),
                deleteProduct: null
            }
        case SELECT_EDIT_PRODUCT:
            return {
                ...state,
                editproduct: action.payload
            }
        case EDIT_PRODUCT_OK:
            return {
                ...state,
                editproduct: null,
                products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)
            }
        default :
            return state
    }
}