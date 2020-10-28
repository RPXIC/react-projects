import React from 'react'
import { Layout, ImgHotel, LandingContent, Room } from '../components'
import { useRooms } from '../hooks'
import { RoomList, Text } from '../styles/HomeStyles'

const Home = () => {
  const rooms = useRooms()

  return (
    <Layout>
      <ImgHotel />
      <LandingContent />
      <Text>Our Rooms</Text>
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
