import React, { useState } from 'react'
import { calcByYear, calcByBrand, calcByCoverage } from 'helper'
import { Field, Label, Select, Error, InputRadio, Button } from 'components/Form/styles'
import PropTypes from 'prop-types'

const Form = ({ setResume, setLoading }) => {
    const [data, setData] = useState({
        brand: '',
        year: '',
        coverage: ''
    })
    const [error, setError] = useState(false)

    const { brand, year, coverage } = data

    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const calculate = e => {
        e.preventDefault()

        if (brand.trim() === '' || year.trim() === '' || coverage.trim() === '') return setError(true)

        setError(false)

        let result = 2000;

        const dif = calcByYear(year)

        result -= ((dif * 3) * result) / 100

        result = calcByBrand(brand) * result

        result = parseFloat(result * calcByCoverage(coverage)).toFixed(2)

        setLoading(true)

        setTimeout(() => {
            setResume({
                quotation: Number(result),
                data
            })

            setLoading(false)
        }, 3000)
    }

    return (
        <form
            onSubmit={calculate}
        >
            {error ? <Error>All fields are required</Error> : null}
            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option value="">-- select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option value="">-- select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Coverage</Label>
                <InputRadio
                    type="radio"
                    name="coverage"
                    value="basic"
                    checked={coverage === "basic"}
                    onChange={getData}
                /> Basic
                <InputRadio
                    type="radio"
                    name="coverage"
                    value="complete"
                    checked={coverage === "complete"}
                    onChange={getData}
                /> Complete
            </Field>

            <Button type="submit">Calculate</Button>
        </form>
    )
}

Form.propTypes = {
    setResume: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form