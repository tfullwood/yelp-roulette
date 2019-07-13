export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BUSINESSES':
            return action.payload
        default:
            return state
    }
}