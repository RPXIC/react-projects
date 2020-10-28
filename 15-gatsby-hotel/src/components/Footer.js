import React from 'react'
import { Nav } from '../components'
import { Logo, FooterContent, Container, FooterText } from '../styles/FooterStyles'

const Footer = ({title}) => {
    const year = new Date().getFullYear()
    return (
        <>
            <FooterContent>
                <Container>
                    <Nav />
                    <Logo to='/'><h1>Gatsby Hotel</h1></Logo>
                </Container>
            </FooterContent>
            <FooterText>{title}. All rights reserved {year} &copy;</FooterText>
        </>
    )
}

export default Footer