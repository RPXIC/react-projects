import { REGISTER_OK, REGISTER_ERROR, GET_USER, LOGIN_OK, LOGIN_ERROR, LOGOUT_USER } from 'types'

export default (state, action) => {
    switch(action.type) {
        case REGISTER_OK:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                authenticated: true,
                msg: null
            }
        
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                msg: action.payload
            }

        default:
            return state
    }
}