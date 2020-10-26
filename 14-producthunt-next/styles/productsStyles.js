import styled from '@emotion/styled'

export const H1 = styled.h1`
    text-align: center;
    margin-top: 4rem;
`

export const ProductContainer = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`

export const CommentsTitle = styled.h2`
    margin: 2rem 0;
`

export const Votes = styled.p`
    margin: 5rem 0 0 0;
    text-align: center;
`

export const Comment = styled.li`
    border: 1px solid #e1e1e1;
    padding: 2rem;
`

export const Bold = styled.span`
    font-weight: bold;
`

export const Owner = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`