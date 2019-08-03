import * as types from '../constants/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_BUSINESS:
            return action.payload
        // case 'FETCH_BUSINESSES_FAILURE':
        //     return false
        default:
            return state
    }
}