import styled from '@emotion/styled'

export const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

export const Text = styled.h2`
    text-align: center;
    margin-top: 5rem;
    font-size: 3rem;
`