import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBusinesses } from '../actions'

export class Search extends Component {
    componentDidMount() {
        const fetchBizParams = {
            term: 'restaurant',
            latitude: 40.7608,
            longitude: -111.9
        }

        this.props.fetchBusinesses(fetchBizParams)
    }
    

    render() {
        console.log();
        

        return (
            <div>
                search
                {this.props.location.lat}
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
        fetchBusinesses
    }
)(Search)