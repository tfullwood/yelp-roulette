import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Search from './Search'
import Business from './Business'
import BusinessList from './BusinessList'
import About from './About'
import Contact from './Contact'
import Page404 from './Page404'
import Error from './Error'
import { fetchCoords, setError } from '../actions'
import history from '../history'

class App extends Component {
    componentDidMount() {
        this.props.fetchCoords()
    }

    render() {
        return (
            <div className="ui container">
                {this.props.errors ? <Error /> : ''}

                <Router history={history}>
                    <div>
                        <Header />
                        <Search />
                        <Switch>
                            <Route path="/" exact component={BusinessList} onSearchSubmit={this.onSearchSubmit} />
                            <Route path="/business/:id" exact component={Business} />
                            <Route path="/about" exact component={About} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/404" exact component={Page404} />
                            <Route component={Page404} />
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
        setError
    }
)(App)