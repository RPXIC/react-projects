import React from 'react'
import PropTypes from 'prop-types'
import { News } from 'components'

const NewsList = ({ news }) => {
    return (
        <div className="row">
            {news.map(_new => (
                <News
                    key={_new.url}
                    _new={_new}
                />
            ))}

        </div>
    )
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsList