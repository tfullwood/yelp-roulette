import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Header } from 'semantic-ui-react'

import { fetchBusiness } from '../actions'
import history from '../history'

export class Business extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        if (id === '') {
            history.push('/')
        }

        this.props.fetchBusiness(encodeURI(id))
    }

    renderPage = () => {
        if (!this.props.business) {
            return (
                <div>The page is loading...</div>
            )
        }
        const business = this.props.business
        console.log(business);
        
        return (
            <div>
                <Divider horizontal>
                    <Header as='h2'>{business.name}</Header>
                </Divider>
                

            </div>
        )
    }
    
    

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    business: state.business
})

export default connect(
    mapStateToProps,
    {
        fetchBusiness
    }
)(Business)
