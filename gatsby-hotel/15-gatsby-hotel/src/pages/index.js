import React from "react"
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import ImgHotel from '../components/ImgHotel'
import LandingContent from '../components/LandingContent'
import Room from '../components/Room'
import useRooms from '../hooks/useRooms'

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const Home = () => {
  const rooms = useRooms()

  return (
    <Layout>
      <ImgHotel />

      <LandingContent />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Our Rooms</h2>

      <RoomList>
        {rooms.map(room => (
          <Room 
            key={room.id}
            room={room}
          />
        ))}
      </RoomList>
    </Layout>
  )
}

export default Home
