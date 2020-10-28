import React from 'react'
import { NavBar, NavLink } from '../styles/NavStyles'

const Nav = () => {
    return (
        <NavBar>
            <NavLink to={'/'} activeClassName="actual-page">Home</NavLink>
            <NavLink to={'/about'} activeClassName="actual-page">About</NavLink>
        </NavBar>
    )
}

export default Nav