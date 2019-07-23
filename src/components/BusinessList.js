import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Header } from 'semantic-ui-react'

import BusinessCard from './BusinessCard'

class BusinessList extends Component {
    render() {
        let content
        if (this.props.businesses.length === 0) {
            content = (<Header as="h2" textAlign="center">Search Restaurants Above</Header>)
        } else {
            content = (
                <div className="ui link cards three column grid stackable">
                    {this.props.businesses.map((business => {
                        return <BusinessCard key={business.id} business={business} />
                    }))}
                </div>
            )
        }

        return (
            <div>
                <Divider horizontal>
                    <Header as='h4'>Restaurants</Header>
                </Divider>

                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    businesses: state.businesses
})

export default connect(mapStateToProps)(BusinessList)
