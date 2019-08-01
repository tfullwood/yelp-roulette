import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Header, Pagination } from 'semantic-ui-react'

import { fetchSearch, fetchBusinesses } from '../actions'
import BusinessCard from './BusinessCard'

class BusinessList extends Component {
    handlePaginationChange = (e, { activePage }) => {
        this.props.fetchSearch({ offset: (activePage - 1) * this.props.search.limit }).then(() => {
            this.props.fetchBusinesses({
                lat: this.props.search.lat,
                long: this.props.search.long,
                categories: this.props.search.categories.join(','),
                limit: this.props.search.limit,
                offset: this.props.search.offset
            })
        })
    }

    render() {
        let content
        if (this.props.businesses.length === 0) {
            content = (<Header as="h2" textAlign="center">Search Restaurants Above</Header>)
        } else {
            content = (
                <div>
                    <div className="ui link cards three column grid stackable">
                        {this.props.businesses.businesses.map((business => {
                            return <BusinessCard key={business.id} business={business} />
                        }))}
                    </div>
                    <div style={{textAlign:"right"}}>
                        <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={Math.ceil(this.props.businesses.total / 15)}
                            onPageChange={this.handlePaginationChange}
                        />
                    </div>
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
    businesses: state.businesses,
    search: state.search
})

export default connect(mapStateToProps, {
    fetchSearch,
    fetchBusinesses
})(BusinessList)
