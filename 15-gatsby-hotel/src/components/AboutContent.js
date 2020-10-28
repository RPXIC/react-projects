import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { Content, Title } from '../styles/AboutContentStyles'

const AboutContent = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: { eq: "about" } }) {
                nodes {
                    title,
                    content,
                    image {
                        fluid( maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    const { title, content, image } = data.allDatoCmsPage.nodes[0]

    return (
        <>
            <Title>{title}</Title>
            <Content>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </Content>
        </>
    )
}

export default AboutContent