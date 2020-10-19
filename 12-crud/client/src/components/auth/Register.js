import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'components'
import { AlertContext, AuthContext } from 'context'

const Register = props => {

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    const authContext = useContext(AuthContext)
    const { msg, authenticated, register } = authContext

    useEffect(() => {
        if (authenticated) props.history.push('/projects')
        if (msg) showAlert(msg.msg, msg.category)
        //eslint-disable-next-line
    }, [msg, authenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { name, email, password, confirm } = user

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
            return showAlert('All fields are required', 'alert-error')
        }

        if (password.length < 6) return showAlert('The password must be at least six characters', 'alert-error')

        if(password !== confirm) return showAlert('Passwords not equal', 'alert-error')

        register({name, email, password})        
    }

    return (
        <div className="user-form">
            <Alert alert={alert} />
            <div className="form-container dark-shadow">
                <h1 data-cy="title">Register</h1>
                <form
                    data-cy="register-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input
                            data-cy="name-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>

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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            data-cy="confirm-input"
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="repeat password"
                            value={confirm}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <input data-cy="submit" type="submit" className="btn btn-primary btn-block" value="Register" />
                    </div>
                </form>

                <Link data-cy="login" to={'/'} className="account-link">Login</Link>
            </div>
        </div>
    )
}

export default Register