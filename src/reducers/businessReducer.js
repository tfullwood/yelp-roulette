import * as types from '../constants/ActionTypes'

export default (state = {isLoading: false}, action) => {
    switch (action.type) {
        case types.FETCH_BUSINESS_REQUEST:
        case types.FETCH_ROULETTE_REQUEST:
            return { isLoading: true }
        case types.FETCH_BUSINESS_SUCCESS:
        case types.FETCH_ROULETTE_SUCCESS:
            return action.payload
        case types.FETCH_BUSINESS_FAILURE:
        case types.FETCH_ROULETTE_FAILURE:
            return { isLoading: false }
        default:
            return state
    }
}