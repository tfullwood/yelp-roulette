import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Search extends Component {
    
    render() {
        return (
            <div>
                <p onClick={this.props.onClick}>Search</p>
                {/* {this.props.businesses.map((business => {
                    return JSON.stringify(business)
                }))} */}
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

export default connect(mapStateToProps)(Search)