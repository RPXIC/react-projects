import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const Logo = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`

export const Container = styled.header`
    background-color: rgba(44,62,80);
    padding: 1rem;
`

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
        display:flex;
        align-items: center;
        justify-content: space-between;    
    }
`