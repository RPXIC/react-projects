import React, { useReducer } from 'react'
import AuthContext from 'context/auth/AuthContext'
import AuthReducer from 'context/auth/AuthReducer'
import { REGISTER_OK, REGISTER_ERROR, GET_USER, LOGIN_OK, LOGIN_ERROR, LOGOUT_USER } from 'types'

const API_URL = process.env.REACT_APP_API_URL

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msg: null,
        loading: true
    }

    const [state,dispatch] = useReducer(AuthReducer, initialState)

    const register = async data => {
        try {
            const res = await fetch(`${API_URL}/api/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const { status } = res
            
            if (status === 200) {
                const response = await res.json()
                dispatch({
                    type: REGISTER_OK,
                    payload: response
                })

                return getUser()
            }
    
            if (status >= 400 && status < 500) {
                const { msg } = await res.json()

                const alert = {
                    msg,
                    category: 'alert-error'
                }
                dispatch({
                    type: REGISTER_ERROR,
                    payload: alert
                })            
            }
        } catch (error) {
            const alert = {
                msg: error.message,
                category: 'alert-error'
            }
            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })
        }
    }

    const getUser = async () => {
        const token = localStorage.getItem('token')

        try {
            const res = await fetch(`${API_URL}/api/auth`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            })
            const response = await res.json()

            dispatch({
                type: GET_USER,
                payload: response.user
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const login = async data => {
        try {
            const res = await fetch(`${API_URL}/api/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const { status } = res
            
            if (status === 200) {
                const response = await res.json()

                dispatch({
                    type: LOGIN_OK,
                    payload: response
                })

                return getUser()
            }
    
            if (status >= 400 && status < 500) {
                const { msg } = await res.json()

                const alert = {
                    msg,
                    category: 'alert-error'
                }
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alert
                })            
            }
        } catch (error) {
            const alert = {
                msg: error.message,
                category: 'alert-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    const logout = () => {
        dispatch({
            type: LOGOUT_USER
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg,
                loading: state.loading,
                register,
                login,
                getUser,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
