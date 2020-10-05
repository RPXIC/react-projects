import React, { useState, useEffect } from 'react'
import { Form, Lyric, Info } from 'components'

const App = () => {
  const [query, setQuery] = useState({})
  const [lyric, setLyric] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (!Object.keys(query).length) return

    (async () => {
      try {
        const { artist, title } = query
        const url = `https://api.lyrics.ovh/v1/${artist.toUpperCase()}/${title.toUpperCase()}`
        const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist.toUpperCase()}`

        const [lyricRes, infoRes] = await Promise.all([
          fetch(url),
          fetch(url2)
        ])

        const [lyric, info] = await Promise.all([
          lyricRes.json(),
          infoRes.json()
        ])

        setLyric(lyric.lyrics)
        setInfo(info.artists[0])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [query])

  return (
    <>
      <Form
        setQuery={setQuery}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Lyric lyric={lyric} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
