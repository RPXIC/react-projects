import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Layout } from '../components'
import { Main, Title } from '../styles/RoomsStyles'

export const query = graphql`
    query ($slug: String!) {
        allDatoCmsRoom(filter: { slug: { eq: $slug }}) {
            nodes {
                title,
                content,
                image {
                    fluid(maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const RoomsTemplate = ({ data: { allDatoCmsRoom: { nodes } } }) => {
    const { title, content, image } = nodes[0]

    return (
        <Layout>
            <Main>
                <Title>{title}</Title>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </Main>
        </Layout>
    )
}

export default RoomsTemplate