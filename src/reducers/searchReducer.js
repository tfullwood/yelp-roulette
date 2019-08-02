export default (state = {location:null, lat:null,long:null,categories:[],limit:15,offset:0}, action) => {
    switch (action.type) {
        case 'FETCH_SEARCH':
            let k = Object.keys(action.payload)
            let returnState = { ...state }

            //iterate through params and add to the payload
            k.map((obj, i) => {
                return returnState[k[i]] = action.payload[obj]
            })

            return returnState
        case 'SET_LOC_OVERRIDE':
            return { ...state, locationOverride: true }
        default:
            return state
    }
}