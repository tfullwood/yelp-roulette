import React from 'react'
import _ from 'lodash'

import history from '../history'
import brokenImg from '../images/broken-image.jpg'

const BusinessCard = ({ business }) => {
    const img = business.image_url ? business.image_url.replace('o.jpg', '348s.jpg') : brokenImg
    //NOTE - I replace the original image returned from the Yelp API with an image that they have already cropped to be a consistent size. If something breaks with the images theres a good chance this is it.
    return (
        <div className="card" onClick={() => history.push(`/business/${business.id}`)} style={{cursor:'pointer'}}>
            <div className="image"><img src={img} alt={business.name} /></div>
            <div className="content">
            <div className="header">{_.truncate(business.name, {'length': 25})}</div>
            <div className="meta">
                {_.truncate(business.categories.map((category, i) => {
                    return " " + category.title
                }), {'length': 40})}
            </div>
            </div>
            <div className="extra content">
            <span className="right floated">
                {/* Consider mapping through the display address array and concat to a link string, might be more accurate */}
                <a href={encodeURI(`https://google.com/maps/place/${business.location.address1}+${business.location.city}+${business.location.state}+${business.location.zip_code}+${business.location.country}`)} target="_blank" rel="noopener noreferrer">Google Maps </a>
                |
                <a href={`${business.url}`} target="_blank" rel="noopener noreferrer"> Yelp</a>
            </span>
            <span>
                {`Rated ${business.rating} stars`}
            </span>
            </div>
        </div>
    )
}

export default BusinessCard
