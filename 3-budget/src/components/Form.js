import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Error } from 'components'
const shortid = require('shortid')

const Form = ({ setSpending, setCreateSpending }) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)

    const addSpending = e => {
        e.preventDefault()

        if (quantity < 1 || isNaN(quantity) || name.trim() === "") return setError(true)

        setError(false)

        const spending = {
            name,
            quantity,
            id: shortid.generate()
        }

        setSpending(spending)
        setCreateSpending(true)
        setName('')
        setQuantity(0)
    }


    return (
        <form
            onSubmit={addSpending}
        >
            <h2>Add your expenses</h2>
            {error ? <Error error="All fields are required or budget incorrect" /> : null}
            <div className="field">
                <label>Spending name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. transport"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Spending quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 50"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add Spending"
            />
        </form>
    )
}

Form.propTypes = {
    setSpending: PropTypes.func.isRequired,
    setCreateSpending: PropTypes.func.isRequired
}

export default Form