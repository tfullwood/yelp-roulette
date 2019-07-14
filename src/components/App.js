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

    onSearchSubmit = (categories = [], location = '') => {
        this.props.fetchBusinesses({term: 'restaurant', lat: this.props.location.lat, long: this.props.location.long, categories: categories.join(',')})
    }

    render() {
        return (
            <div className="ui container">
                <Header />
                <Search onSearchSubmit={this.onSearchSubmit} />
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