import * as types from '../constants/ActionTypes'

export default (state = {isLoading: false}, action) => {
    switch (action.type) {
        case types.FETCH_BUSINESSES_REQUEST:
            return { isLoading: true }
        case types.FETCH_BUSINESSES_SUCCESS:
            action.payload.isLoading = false
            return action.payload
        case types.FETCH_BUSINESSES_FAILURE:
            return { isLoading: false }
        default:
            return state
    }
}