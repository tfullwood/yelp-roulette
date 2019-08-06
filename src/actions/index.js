import yelp from '../apis/yelp'
//if project grows - descructure and only import what's necessary (do same with reducers)
import * as types from '../constants/ActionTypes'

export const fetchBusinesses = (params) => {
    return async (dispatch) => {
        try {
            dispatch({type: types.CLEAR_ERRORS})
            dispatch({type: types.FETCH_BUSINESSES_REQUEST})

            const res = await yelp.get('/businesses', {
                params: {
                    term: params.term || 'restaurant',
                    lat: params.lat || '',
                    long: params.long || '',
                    location: params.location || '',
                    categories: params.categories || '',
                    radius: params.radius || 8000, //set to meters, 8000 is roughly 5 miles
                    limit: params.limit || 15,
                    offset: params.offset || 0
                }
            })
            
            dispatch({ type: types.FETCH_BUSINESSES_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: types.FETCH_BUSINESSES_FAILURE, payload: {error, message: 'Something happened when we tried to search for restaurants, please try again.'}})
        }
    }
}

export const fetchBusiness = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: types.CLEAR_ERRORS})
            dispatch({type: types.FETCH_BUSINESS_REQUEST})            

            const res = await yelp.get('/business', {
                params: { id }
            })
            
            dispatch({ type: types.FETCH_BUSINESS_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: types.FETCH_BUSINESS_FAILURE, payload: {error, message: 'Something happened looking up this restaurant, please try again.'}})
        }
    }
}

export const fetchCoords = () => {
    return async (dispatch) => {
        await window.navigator.geolocation.getCurrentPosition(
            position => {
                dispatch({ type: types.FETCH_SEARCH, payload: { lat: position.coords.latitude, long: position.coords.longitude }})
            },
            err => {
                dispatch({ type: types.SET_LOC_OVERRIDE })
            }
        );
    }
}

export const fetchSearch = (params) => {
    let payload = {}
    let k = Object.keys(params)
    
    //iterate through params and add to the payload
    //doing this so I only have to pass necessary params when fetchSearch is called
    k.map((obj, i) => {
        return payload[k[i]] = params[obj]
    })
    
    return async (dispatch) => {
        dispatch({type: types.FETCH_SEARCH, payload})
    }
}

export const clearErrors = () => {
    return async (dispatch) => {
        dispatch({type: types.CLEAR_ERRORS})
    }
}

export const setError = (params) => {
    return async (dispatch) => {
        dispatch({type: types.SET_ERROR, payload: {message: params.message || 'Something went wrong'}})
    }
}