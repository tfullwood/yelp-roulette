import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Search from './Search'
import { fetchCoords, fetchBusinesses } from '../actions'
import { BusinessList } from './BusinessList';

class App extends Component {
    componentDidMount() {
        this.props.fetchCoords()
    }

    onSearchClick = () => {
        const fetchBizParams = {
            term: 'restaurant',
            lat: 40.7608,
            long: -111.9
        }

        this.props.fetchBusinesses(fetchBizParams)
    }

    render() {
        return (
            <div className="ui container">
                <Header />
                <Search onClick={this.onSearchClick} />
                <BusinessList businesses={this.props.businesses} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        businesses: state.businesses
    }
}

export default connect(
    mapStateToProps,
    {
        fetchCoords,
        fetchBusinesses
    }
)(App)