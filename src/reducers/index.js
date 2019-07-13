import { combineReducers } from 'redux'

import businessesReducer from './businessesReducer'

export default combineReducers({
    businesses: businessesReducer
})