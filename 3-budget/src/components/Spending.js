import React from 'react'
import PropTypes from 'prop-types'

const Spending = ({ spending }) => (
    <li className="expenses">
        <p>{spending.name}
            <span className="spending">$ {spending.quantity}</span>
        </p>
    </li>
)

Spending.propTypes = {
    spending: PropTypes.object.isRequired
}

export default Spending