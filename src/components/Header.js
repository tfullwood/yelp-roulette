import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
    return (
        <Link to="/">
            <div className="ui stackable container menu">
                <div className="header item">
                    <img src={process.env.PUBLIC_URL + '/img/yelp-logo.png'} alt="Yelp" /> Roulette
                </div>
                <div className="right menu">
                    <a className="item" href="/">About</a>
                    <a className="item" href="/">Contact</a>
                </div>
            </div>
        </Link>
    )
}

export default Header
