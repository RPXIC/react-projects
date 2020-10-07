import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

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


    }

    return (
        <div className="user-form">
            <div className="form-container dark-shadow">
                <h1>Register</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="repeat password"
                            value={confirm}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <input type="submit" className="btn btn-primary btn-block" value="Register" />
                    </div>
                </form>

                <Link to={'/'} className="account-link">Login</Link>
            </div>
        </div>
    )
}

export default Register