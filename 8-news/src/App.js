import React, { useState, useEffect } from 'react'
import { Header, Form, NewsList } from 'components'

const App = () => {
  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])

  const API_KEY = '23a3d57f077141c99e3a7c39fca11cc0'

  useEffect(() => {
    (async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      const res = await fetch(url)
      const news = await res.json()
      setNews(news.articles)
    })()
  }, [category])

  return (
    <>
      <Header title="News" />
      <div className="container white">
        <Form
          setCategory={setCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </>
  )
}

export default App
