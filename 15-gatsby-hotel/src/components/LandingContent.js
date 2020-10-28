import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { LandingText, Title } from '../styles/LandingContentStyles'

const LandingContent = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: { eq: "landing" } }) {
                nodes {
                    title,
                    content,
                    image {
                        fluid {
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
            <LandingText>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </LandingText>
        </>
    )
}

export default LandingContent