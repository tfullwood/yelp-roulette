import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Business extends Component {
    render() {
        return (
            <div>
                Display the business
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(
    mapStateToProps,
    {

    }
)(Business)
