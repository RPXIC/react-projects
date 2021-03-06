import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 940px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const HeaderMain = styled.header`
    border-bottom: 2px solid var(--gray3);
    width: 100%;
    padding: 1rem 0;
`

export const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    cursor: pointer;
`

export const FlexRowCenter = styled.div`
    min-width: 195px;
    display: flex;
    align-items: center;
`

export const Welcome = styled.p`
    margin: 0 1.5rem 0 0;
`