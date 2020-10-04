import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'components'

const List = ({ result }) => {
    return (
        <div className="col-12 p-5 row">
            {result.map(image => (
                <Image
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    )
}

List.propTypes = {
    result: PropTypes.array.isRequired
}

export default List