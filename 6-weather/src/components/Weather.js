import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({ data }) => {
    const { name, main } = data

    if (!name) return null

    const kelvin = 273.15

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in {name}:</h2>
                <p className="temp">{parseFloat(main.temp - kelvin, 10).toFixed(2)}<span> &#x2103;</span></p>
                <p>Max:
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}<span> &#x2103;</span></p>
                <p>Min:
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}<span> &#x2103;</span></p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    data: PropTypes.object.isRequired
}

export default Weather