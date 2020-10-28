import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
`

export const Container = styled.div`
    border: 1px solid #e1e1e1;
    margin-bottom: 2rem;
`

export const Content = styled.div`
    padding: 3rem;
`

export const Title = styled.h3`
    font-size: 3rem;
`