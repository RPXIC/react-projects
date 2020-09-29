import React from 'react'
import PropTypes from 'prop-types'
import { Spending } from 'components'

const List = ({ expenses }) => (
    <div className="expenses-incurred">
        <h2>List</h2>
        {expenses.map(spending => (
            <Spending
                key={spending.id}
                spending={spending}
            />
        ))}
    </div>
)

List.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default List