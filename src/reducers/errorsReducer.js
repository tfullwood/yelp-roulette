import * as types from '../constants/ActionTypes'

export default (state = null, action) => {
    switch (action.type) {
        case types.CLEAR_ERRORS:
            return null
        case types.SET_ERROR:
        case types.FETCH_BUSINESS_FAILURE:
        case types.FETCH_BUSINESSES_FAILURE:
            return {
                message: action.payload.message || 'Something went wrong, please try again'
            }
        default:
            return state
    }
}