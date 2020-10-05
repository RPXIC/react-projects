import React from 'react'
import PropTypes from 'prop-types'

const Lyric = ({ lyric }) => {

    if (lyric.length === 0) return null

    return (
        <>
            <h2>Lyric</h2>
            <p className="lyric">{lyric}</p>
        </>
    )
}

Lyric.propTypes = {
    lyric: PropTypes.string.isRequired
}

export default Lyric