import React, { Component } from 'react'
import { connect } from 'react-redux'

//import { fetchBusinesses } from '../actions'

export class Search extends Component {
    componentDidMount() {
        //this.props.fetchBusinesses()
    }
    

    render() {
        return (
            <div>
                search
                {this.props.location.lat}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { location: state.location }
}

export default connect(
    mapStateToProps,
    // {
    //     fetchBusinesses
    // }
)(Search)