import React, { useState, useEffect } from 'react'
import { Form, List } from 'components'

const API_KEY = '18570658-d72d24690e5e06cd77d9442cc'
const pagination = 30

const App = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const [actualpage, setAcutalPage] = useState(1)
  const [totalpages, setTotalPages] = useState(1)

  useEffect(() => {
    (async () => {
      if (search.trim() === "") return
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${pagination}&page=${actualpage}`
      const res = await fetch(url)
      const pictures = await res.json()
      setResult(pictures.hits)

      const calcTotalPages = Math.ceil(pictures.totalHits / pagination)
      setTotalPages(calcTotalPages)

      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({ behavior: 'smooth' })
    })()
  }, [search, actualpage])

  const previousPage = () => {
    const newPage = actualpage - 1
    if (newPage === 0) return
    setAcutalPage(newPage)
  }

  const nextPage = () => {
    const newPage = actualpage + 1
    if (newPage > totalpages) return
    setAcutalPage(newPage)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Form
          setSearch={setSearch}
        />
        <div className="row justify-content-center">
          <List result={result} />
          {(actualpage === 1) ? null : (
            <button
              type="button"
              className="bbtn btn-info mr-1"
              onClick={previousPage}
            >&laquo; Back</button>
          )}
          {(actualpage === totalpages) ? null : (
            <button
              type="button"
              className="bbtn btn-info"
              onClick={nextPage}
            >Next &raquo;</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
