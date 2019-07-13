import React from 'react'

import '../styles/Header.css'

const Header = () => {
    return (
        <div className="ui stackable container menu">
            <div className="header item">
                <img src={process.env.PUBLIC_URL + '/img/yelp-logo.png'} alt="Yelp" /> Roulette
            </div>
            <div className="right menu">
                <a className="item" href="/">About</a>
                <a className="item" href="/">Contact</a>
            </div>
        </div>
    )
}

export default Header
