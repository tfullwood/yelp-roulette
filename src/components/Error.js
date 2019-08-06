import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

import { clearErrors } from '../actions'

class Error extends Component {
    handleDismiss = () => {
        this.props.clearErrors()
    }

    render() {
        return (
            <Message negative onDismiss={this.handleDismiss}>
                <Message.Header>{this.props.errors.message}</Message.Header>
            </Message>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, {
    clearErrors
})(Error)