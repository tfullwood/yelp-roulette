import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Search from './Search'
import Business from './Business'
import BusinessList from './BusinessList'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import { fetchCoords, fetchBusinesses, setError } from '../actions'
import history from '../history'

class App extends Component {
    componentDidMount() {
        this.props.fetchCoords()
    }

    onSearchSubmit = (categories = []) => {
        if ((this.props.search.lat === null || this.props.search.long === null) && this.props.search.location == null) {
            return this.props.setError({message: 'Please add a location or allow us to view location so we can find restaurants near you'})
        }

        if (this.props.search.locationOverride) {
            this.props.fetchBusinesses({term: 'restaurant', location: this.props.search.location, categories: this.props.search.categories.join(',')})
        } else {
            this.props.fetchBusinesses({term: 'restaurant', lat: this.props.search.lat, long: this.props.search.long, categories: this.props.search.categories.join(',')})
        }
    }

    render() {
        return (
            <div className="ui container">
                {this.props.errors ? <Error /> : ''}

                <Router history={history}>
                    <div>
                        <Header />
                        <Search onSearchSubmit={this.onSearchSubmit} />
                        <Switch>
                            <Route path="/" exact component={BusinessList} onSearchSubmit={this.onSearchSubmit} />
                            <Route path="/business/:id" exact component={Business} />
                            <Route path="/about" exact component={About} />
                            <Route path="/contact" exact component={Contact} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        search: state.search,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    {
        fetchCoords,
        fetchBusinesses,
        setError
    }
)(App)