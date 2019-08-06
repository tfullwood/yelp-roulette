import * as types from '../constants/ActionTypes'

export default (state = {isLoading: false}, action) => {
    switch (action.type) {
        case types.FETCH_BUSINESS_REQUEST:
            return { isLoading: true }
        case types.FETCH_BUSINESS_SUCCESS:
            return action.payload
        case types.FETCH_BUSINESS_FAILURE:
            return { isLoading: false }
        default:
            return state
    }
}