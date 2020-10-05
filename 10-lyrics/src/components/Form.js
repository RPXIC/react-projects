import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ setQuery }) => {
    const [search, setSearch] = useState({
        artist: '',
        title: ''
    })
    const [error, setError] = useState(false)

    const { artist, title } = search

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (artist.trim() === '' || title.trim() === '') return setError(true)
        setError(false)

        setQuery(search)
    }

    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">All fields are required</p> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Lyrics Searcher</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist"
                                            onChange={handleChange}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            placeholder="Title"
                                            onChange={handleChange}
                                            value={title}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

Form.propTypes = {
    setQuery: PropTypes.func.isRequired
}

export default Form