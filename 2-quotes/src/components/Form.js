import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const Form = ({ createQuote }) => {
    const [quote, setQuote] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    })
    const [error, setError] = useState(false)

    const handleChange = e => {
        setQuote({
            ...quote,
            [e.target.name]: e.target.value
        })
    }

    const { pet, owner, date, time, symptoms } = quote

    const submitQuote = e => {
        e.preventDefault()

        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
            return setError(true)
        }
        setError(false)

        quote.id = uuidv4()

        createQuote(quote)

        setQuote({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }

    return (
        <>
            <h2>Create Quote</h2>
            {error ? <p className="alert-error">All fields are required</p> : null}
            <form
                onSubmit={submitQuote}
            >
                <label>Pet Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                    onChange={handleChange}
                    value={pet}
                />
                <label>Owner Name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner Name"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Entry date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label>Entry Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add Qoute</button>
            </form>
        </>
    )
}

Form.propTypes = {
    createQuote: PropTypes.func.isRequired
}

export default Form