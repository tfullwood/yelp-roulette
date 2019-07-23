import yelp from '../apis/yelp'

export const fetchBusinesses = (params) => {
    return async (dispatch) => {
        if (params.lat === null || params.long === null) {
            console.log(dispatch({type: 'FETCH_BUSINESSES_FAILURE', payload: 'Something went wrong, fix it'}))
        }

        try {
            //TODO - call a dispatch here for FETCH_BUSINESSES_START
                //Then set a isLoading value in the reducer. This would display a loading spinner to the user while the request is being made

            const res = await yelp.get('/businesses', {
                params: {
                    term: params.term,
                    lat: params.lat,
                    long: params.long,
                    categories: params.categories || '',
                    radius: params.radius || 8000, //set to meters, 8000 is roughly 5 miles
                    limit: params.limit || 12
                }
            })
            
            dispatch({ type: 'FETCH_BUSINESSES', payload: res.data.businesses })
        } catch (err) {
            //TODO - need to actually handle this...
            console.log('NOOOOO, something happened...', err)
            dispatch({ type: 'doabsolutelynothing' })
        }

        
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