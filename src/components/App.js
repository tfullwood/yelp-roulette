import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Search from './Search'
import { fetchCoords, fetchBusinesses } from '../actions'
import BusinessList from './BusinessList';
import Business from './Business'
import history from '../history'

class App extends Component {
    componentDidMount() {
        this.props.fetchCoords()
    }

    onSearchSubmit = (categories = []) => {
        if (this.props.search.lat === null || this.props.search.long === null) {
            //TODO handle this more elegantly - set error state and display an error notification
            return alert('Please allow location so we can find restaurants near you.');
        }

        this.props.fetchBusinesses({term: 'restaurant', lat: this.props.search.lat, long: this.props.search.long, categories: this.props.search.categories.join(',')})
    }

    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Search onSearchSubmit={this.onSearchSubmit} />
                        <Switch>
                            <Route path="/" exact component={BusinessList} onSearchSubmit={this.onSearchSubmit} />
                            <Route path="/business/:id" exact component={Business} />
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
        search: state.search
    }
}

export default connect(
    mapStateToProps,
    {
        fetchCoords,
        fetchBusinesses
    }
)(App)