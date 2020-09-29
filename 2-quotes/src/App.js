import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Quote from './components/Quote'

const App = () => {
  let initialQuotes = JSON.parse(localStorage.getItem('quotes'))
  if (!initialQuotes) initialQuotes = []

  const [quotes, setQuotes] = useState(initialQuotes)

  useEffect(() => {
    if (initialQuotes) localStorage.setItem('quotes', JSON.stringify(quotes))
    else localStorage.setItem('quotes', JSON.stringify([]))
  }, [quotes, initialQuotes])

  const createQuote = quote => {
    setQuotes([
      ...quotes,
      quote
    ])
  }

  const deleteQuote = id => {
    const newQuotes = quotes.filter(quote => quote.id !== id)
    setQuotes(newQuotes)
  }

  const title = quotes.length ? 'Manage your quotes' : 'No quotes'

  return (
    <>
      <h1>Quotes manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createQuote={createQuote}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                deleteQuote={deleteQuote}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
