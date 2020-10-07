import React from 'react'

const Header = () => {

    return (
        <header className="app-header">
            <p className="username"> Hello, <span>IEP</span></p>

            <nav className="nav">
                <a href="#!">Logout</a>
            </nav>
        </header>
    )
}

export default Header