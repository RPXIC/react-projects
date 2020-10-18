import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AlertContext, AuthContext } from 'context'

const Login = props => {

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    const authContext = useContext(AuthContext)
    const { msg, authenticated, login } = authContext

    useEffect(() => {
        if (authenticated) props.history.push('/projects')
        if (msg) showAlert(msg.msg, msg.category)
        //eslint-disable-next-line
    }, [msg, authenticated, props.history])

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '' ) return showAlert('All fields are required', 'alert-error')

        login({ email, password })
    }

    return (
        <div className="user-form">
            {alert ? ( <div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="form-container dark-shadow">
                <h1 data-cy="title">Login</h1>
                <form
                    onSubmit={handleSubmit}
                    data-cy="login-form"
                >
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            data-cy="email-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                            data-cy="password-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <input
                            data-cy="submit-login"
                            type="submit" 
                            className="btn btn-primary btn-block" 
                            value="Login"    
                        />
                    </div>
                </form>

                <Link data-cy="register" to={'/register'} className="account-link">Register</Link>
            </div>
        </div>
    )
}

export default Login