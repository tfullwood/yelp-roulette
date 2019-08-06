import * as types from '../constants/ActionTypes'

const INITIAL_STATE = {
    location: null,
    lat: null,
    long: null,
    categories: [],
    limit: 15,
    offset: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_SEARCH:
            let k = Object.keys(action.payload)
            let returnState = { ...state }

            //iterate through params and add to the payload
            k.map((obj, i) => {
                return returnState[k[i]] = action.payload[obj]
            })

            return returnState
        case types.SET_LOC_OVERRIDE:
            return { ...state, locationOverride: true }
        default:
            return state
    }
}