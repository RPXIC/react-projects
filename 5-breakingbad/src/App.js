import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Quote from './components/Quote'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;

`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`

const App = () => {

  const [quote, setQuote] = useState({})

  const getQuote = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const res = await api.json()
    setQuote(res[0])
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <Container>
      <Quote quote={quote} />
      <Button
        onClick={getQuote}
      >Get Quote</Button>
    </Container>
  )
}

export default App
