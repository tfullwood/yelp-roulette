import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
    return (
        <div className="ui stackable container menu">
                <Link to="/">
                    <div className="header item">
                        <img src={process.env.PUBLIC_URL + '/img/yelp-logo.png'} alt="Yelp" /> Roulette
                    </div>
                </Link>
                <div className="right menu">
                    <Link to="/about" className="item">About</Link>
                    <Link to="/contact" className="item">Contact</Link>
                </div>
            </div>
    )
}

export default Header
