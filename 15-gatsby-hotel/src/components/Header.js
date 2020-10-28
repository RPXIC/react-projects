import React from 'react'
import { Nav } from '../components'
import { Logo, Container, Content } from '../styles/HeaderStyles'

const Header = () => {
    return ( 
        <Container>
            <Content>
                <Logo to='/' ><h1>Gatsby Hotel</h1></Logo>
                <Nav />
            </Content>
        </Container>
    )
}

export default Header