import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ info }) => {

    if (!Object.keys(info).length) return null

    const { strArtistThumb, strGenre, strBiographyEN, strFacebook, strTwitter, strLastFMChart, strCountry, strArtist, strWebsite, intFormedYear } = info

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light text-center font-weight-bold">
                {strArtist}
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="artist" />
                <p className="card-text">{strGenre} - {strCountry} - {intFormedYear}</p>
                <h2 className="card-text">Biography:</h2>
                <p className="card-text">{strBiographyEN}</p>
                <p className="card-text">
                    {strWebsite && <a href={`https://${strWebsite}`} target="_blank" rel="noopener noreferrer">
                        <i className="far fa-newspaper"></i>
                    </a>}
                    {strFacebook && <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>}
                    {strTwitter && <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>}
                    {strLastFMChart && <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>}
                </p>
            </div>
        </div>
    )
}

Info.propTypes = {
    info: PropTypes.object.isRequired
}

export default Info