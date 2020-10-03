import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Result = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`

const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`

const Quotation = ({ result }) => {
    if (!Object.keys(result).length) return null

    return (
        <Result>
            <Price>Price: <span>{result.PRICE}</span></Price>
            <Info>Highest price of the day: <span>{result.HIGHDAY}</span></Info>
            <Info>Lowest price of the day: <span>{result.LOWDAY}</span></Info>
            <Info>Last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span></Info>
        </Result>
    )
}

Quotation.propTypes = {
    result: PropTypes.object.isRequired
}

export default Quotation