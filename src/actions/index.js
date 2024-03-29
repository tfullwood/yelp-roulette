import { getBusinesses, getBusiness } from '../apis'
//if project grows - descructure and only import what's necessary (do same with reducers)
import * as types from '../constants/ActionTypes'

export const fetchBusinesses = (params) => {
    return async (dispatch) => {
        try {
            dispatch({type: types.CLEAR_ERRORS})
            dispatch({type: types.FETCH_BUSINESSES_REQUEST})
            const res = await getBusinesses(params)
            
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
            const res = await getBusiness(id)
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

export const fetchRoulette = (params) => {
    return async (dispatch) => {
        try {
            dispatch({type: types.CLEAR_ERRORS})
            dispatch({type: types.FETCH_ROULETTE_REQUEST})

            //This is pretty inefficient but I'm getting bored with this project so ¯\_(ツ)_/¯
            params.limit = 50
            let businesses = await getBusinesses(params)

            if (businesses.data.businesses.length === 0) {
                return dispatch({type: types.SET_ERROR, payload: {message: 'Nothing found... please try again'}})
            }
            
            //Fetching business - gets a random array index and fetch that business id
            const res = await getBusiness(businesses.data.businesses[Math.floor(Math.random() * businesses.data.businesses.length)].id)
            
            dispatch({ type: types.FETCH_ROULETTE_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: types.FETCH_ROULETTE_FAILURE, payload: {error, message: 'Something happened when we tried to search for restaurants, please try again.'}})
        }
    }
}

export const fetchSearch = (params) => {
    let payload = {}
    let k = Object.keys(params)
    
    //Iterate through params and add to the payload
    //Doing this so I only have to pass necessary params when fetchSearch is called
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