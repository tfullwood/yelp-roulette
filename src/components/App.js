import React, { Component } from 'react'

import Header from './Header'
import Search from './Search'
import { fetchCoords } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
    componentDidMount() {
        this.props.fetchCoords()
    }

    render() {
        return (
            <div className="ui container">
                <Header />
                <Search />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { location: state.location }
}

export default connect(
    mapStateToProps,
    {
        fetchCoords
    }
)(App)