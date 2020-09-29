import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Error } from 'components'

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)

    const defineBudget = e => {
        setQuantity(parseInt(e.target.value, 10))
    }

    const addBudget = e => {
        e.preventDefault()

        if (quantity < 1 || isNaN(quantity)) return setError(true)

        setError(false)

        setBudget(quantity)
        setRemaining(quantity)
        setShowQuestion(false)
    }

    return (
        <>
            <h2>Insert your budget</h2>
            {error ? <Error error="The Budget is Incorrect" /> : null}
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Insert your budget"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define budget"
                />
            </form>
        </>
    )
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}

export default Question