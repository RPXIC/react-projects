import React from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import { Header, Footer } from '../components'
import { useSEO } from '../hooks'
import { GlobalStyles } from '../styles/GlobalStyles'

const Layout = (props) => {
    const SEO = useSEO()
    const { /*siteName,*/ fallbackSeo: { description, title } } = SEO

    return (
        <>
            <Global styles={GlobalStyles} />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,700;1,400&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
                {props.children}
            <Footer title={title} />
        </>
    )
}

export default Layout