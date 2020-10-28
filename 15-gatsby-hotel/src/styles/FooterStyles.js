import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Logo = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`

export const FooterContent = styled.footer`
    background-color: rgba(44,62,80);
    margin-top: 5rem;
    padding: 1rem;
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
        display:flex;
        align-items: center;
        justify-content: space-between;    
    }
`

export const FooterText = styled.p`
    text-align: center;
    color: #fff;
    background-color: rgb(33,44,55);
    margin: 0;
    padding: 1rem;
`