import React, { Component } from 'react'
import { connect } from 'react-redux'

import BusinessCard from './BusinessCard'

export class BusinessList extends Component {
    render() {
        return (
            <div className="ui link cards three column grid stackable">
                {this.props.businesses.map((business => {
                    return <BusinessCard key={business.id} business={business} />
                }))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    businesses: state.businesses
})

export default connect(mapStateToProps)(BusinessList)
