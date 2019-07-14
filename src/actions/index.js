import yelp from '../apis/yelp'

export const fetchBusinesses = (params) => {
    return async (dispatch) => {
        const res = await yelp.get('/businesses/search', {
            params: {
                term: params.term,
                latitude: params.lat,
                longitude: params.long,
                radius: 8000 //set to meters, 8000 is roughly 5 miles
            }
        })

        dispatch({ type: 'FETCH_BUSINESSES', payload: res.data })
    }
}

export const fetchCoords = () => {
    return async (dispatch) => {
        await window.navigator.geolocation.getCurrentPosition(
            position => {
                dispatch({ type: 'FETCH_LOCATION', payload: { lat: position.coords.latitude, long: position.coords.longitude } })
            },
            //TODO - HANDLE ERRORS A LITTLE MORE ELEGANTLY
            err => console.log('failure')
        );
    }
}