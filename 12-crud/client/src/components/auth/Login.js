import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

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


    }

    return (
        <div className="user-form">
            <div className="form-container dark-shadow">
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
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
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <input type="submit" className="btn btn-primary btn-block" value="Login" />
                    </div>
                </form>

                <Link to={'/register'} className="account-link">Register</Link>
            </div>
        </div>
    )
}

export default Login