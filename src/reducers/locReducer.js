export default (state = {lat: null, long: null}, action) => {
    switch(action.type) {
        case 'FETCH_COORDS':
            return action.payload
        default:
            return state
    }
}
