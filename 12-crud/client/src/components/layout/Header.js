import React, { useContext, useEffect} from 'react'
import { AuthContext } from 'context'

const Header = () => {

    const authContext = useContext(AuthContext)
    const { user, getUser, logout } = authContext

    useEffect(() => {
        getUser()
        //eslint-disable-next-line
    },[])

    return (
        <header className="app-header">
            { user ? (
                <p className="username"> Welcome <span>{user.name}</span></p>
            ) : null}

            <nav className="nav">
                <button
                    data-cy="logout"
                    className="bnt btn-blank logout"
                    onClick={() => logout()}
                >Logout</button>
            </nav>
        </header>
    )
}

export default Header