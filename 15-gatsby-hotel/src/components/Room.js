import React from 'react'
import Image from 'gatsby-image'
import { Container, Content, Title, Button } from '../styles/RoomStyles'

const Room = ({ room }) => {
    const { content, image, title, slug } = room

    return (
        <Container>
            <Image fluid={image.fluid} />
            <Content>
                <Title>{title}</Title>
                <p>{content}</p>
                <Button to={slug}>See Room</Button>
            </Content>
        </Container>
    )
}

export default Room