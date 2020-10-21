import React from 'react'
import Head from 'next/head'
import { Header } from 'components'
import { globalStyles } from "./styles"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>

      <Head>
        <html lang="en" />
        <title>Product Hunt - Firebase & Next -</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
        <link href="/static/css/app.css" rel="stylesheet" />
        </Head>
      <Header />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
