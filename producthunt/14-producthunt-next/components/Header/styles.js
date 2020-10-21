import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%inherit;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

export const HeaderMain = styled.header`
    border-bottom: 2px solid var(--gray3);
    padding: 1rem 0;
`

export const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`

export const FlexRowCenter = styled.div`
    display: flex;
    align-items: center;
`