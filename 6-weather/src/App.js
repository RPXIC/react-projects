import React, { useEffect, useState } from 'react'
import { Header, Form, Weather, Error } from 'components'

const App = () => {
  const [search, setSearch] = useState({
    city: "",
    country: ""
  })
  const [call, setCall] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const { city, country } = search

  const API_KEY = process.env.REACT_APP_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`

  useEffect(() => {
    (async () => {
      if (call) {
        const res = await fetch(url)
        const result = await res.json()
        setData(result)
        setCall(false)
          ; (result.cod === "404") ? setError(true) : setError(false)
      }
    })()
  }, [call, url])

  return (
    <>
      <Header title="Weather" />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setCall={setCall}
              />
            </div>
            <div className="col m6 s12">
              {error ? <Error msg="No results" /> : <Weather data={data} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
