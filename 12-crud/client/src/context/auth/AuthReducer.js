import { REGISTER_OK, REGISTER_ERROR, GET_USER, LOGIN_OK, LOGIN_ERROR, LOGOUT_USER } from 'types'

export default (state, action) => {
    switch(action.type) {
        case LOGIN_OK:
        case REGISTER_OK:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                authenticated: true,
                msg: null,
                loading: false
            }
        
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }

        case LOGOUT_USER:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                user: null,
                authenticated: null,
                token: null,
                msg: action.payload,
                loading: false
            }

        default:
            return state
    }
}