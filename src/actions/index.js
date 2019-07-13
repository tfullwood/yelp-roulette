import yelp from '../apis/yelp'

// export const fetchBusinesses = (params) => {
//     return async (dispatch) => {
//         const res = await yelp.get('/businesses/search', {
//             params: {
//                 term: params.term,
                
//             }
//         })
//     }
// }

export const fetchCoords = () => {
    return async (dispatch) => {
        await window.navigator.geolocation.getCurrentPosition(
            position => {
                dispatch({ type: 'FETCH_COORDS', payload: { lat: position.coords.latitude, long: position.coords.longitude } })
            },
            //TODO - HANDLE ERRORS A LITTLE MORE ELEGANTLY
            err => console.log('failure')
        );
    }
}