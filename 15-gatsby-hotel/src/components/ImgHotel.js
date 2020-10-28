import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ImageBackground, ImgText } from '../styles/ImgHotelStyles'

const ImgHotel = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "8.jpg"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }

    `)

    return (
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <ImgText>
                <h1>Welcome to Gatsby Hotel</h1>
                <p>The best Hotel for Devs</p>
            </ImgText>
        </ImageBackground>
    )
}

export default ImgHotel