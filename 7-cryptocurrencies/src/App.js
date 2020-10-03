import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Form, Quotation, Spinner } from 'components'
import image from './cryptocurrencies.png'
import axios from 'axios'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin: 80px 0 50px 0;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

const App = () => {
  const [coin, setCoin] = useState('')
  const [cryptocurrency, setCryptocurrency] = useState('')
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      if (coin.trim() === "" || cryptocurrency.trim() === "") return
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`
      const res = await axios.get(url)
      setLoading(true)
      setTimeout(() => setLoading(false), 3000)
      setResult(res.data.DISPLAY[cryptocurrency][coin])
    })()
  }, [coin, cryptocurrency])

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt="crypto_img"
        />
      </div>
      <div>
        <Heading>Cryptocurrencies Prices</Heading>
        <Form setCoin={setCoin} setCryptocurrency={setCryptocurrency} />
        {loading ? <Spinner /> : <Quotation result={result} />}
      </div>
    </Container>
  )
}

export default App
