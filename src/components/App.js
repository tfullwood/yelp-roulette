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
        if (this.props.location.lat === null || this.props.location.long === null) {
            //TODO handle this more elegantly - set error state and display an error notification
            return alert('Please allow location so we can find restaurants near you.');
        }

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