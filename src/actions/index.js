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
                    term: params.term || 'restaurant',
                    lat: params.lat,
                    long: params.long,
                    categories: params.categories || '',
                    radius: params.radius || 8000, //set to meters, 8000 is roughly 5 miles
                    limit: params.limit || 15,
                    offset: params.offset || 0
                }
            })
            
            dispatch({ type: 'FETCH_BUSINESSES', payload: res.data })
        } catch (err) {
            //TODO - need to actually handle this...
            console.log(err)
            dispatch({ type: 'doabsolutelynothing' })
        }
    }
}

export const fetchBusiness = (id) => {
    //TODO - add try and catch blocks and handle exceptions

    return async (dispatch) => {
        const res = await yelp.get('/business', {
            params: {
                id
            }
        })
        
        dispatch({ type: 'FETCH_BUSINESS', payload: res.data })
    }
}

export const fetchCoords = () => {
    return async (dispatch) => {
        await window.navigator.geolocation.getCurrentPosition(
            position => {
                dispatch({ type: 'FETCH_SEARCH', payload: { lat: position.coords.latitude, long: position.coords.longitude }})
            },
            //TODO - HANDLE ERRORS A LITTLE MORE ELEGANTLY
            err => console.log('failure')
        );
    }
}

export const fetchSearch = (params) => {
    let payload = {}
    let k = Object.keys(params)
    
    //iterate through params and add to the payload
    k.map((obj, i) => {
        return payload[k[i]] = params[obj]
    })
    
    return async (dispatch) => {
        dispatch({type:'FETCH_SEARCH', payload})
    }
}