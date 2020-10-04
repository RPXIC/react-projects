import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Error } from 'components'

const Form = ({ setSearch }) => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(false)

    const search = e => {
        e.preventDefault()

        if (query.trim() === "") return setError(true)
        setError(false)
        setSearch(query)
    }

    return (
        <form
            onSubmit={search}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search image"
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>
            {error ? <Error msg="Field is empty" /> : null}
        </form>
    )
}

Form.propTypes = {
    setSearch: PropTypes.func.isRequired
}

export default Form