import React from 'react'
import styled from '@emotion/styled'
import { capitalize } from 'helper'
import PropTypes from 'prop-types'

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Resume = ({ data }) => {
    const { brand, year, coverage } = data

    if (!brand || !year || !coverage) return null

    return (
        <ResumeContainer>
            <h2>Quotation Resume</h2>
            <ul>
                <li>Brand: {capitalize(brand)}</li>
                <li>Year: {year}</li>
                <li>Coverage: {capitalize(coverage)}</li>
            </ul>
        </ResumeContainer>
    )
}

Resume.propTypes = {
    data: PropTypes.object.isRequired
}

export default Resume