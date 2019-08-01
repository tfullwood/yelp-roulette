import { combineReducers } from 'redux'

import businessesReducer from './businessesReducer'
import businessReducer from './businessReducer'
import searchReducer from './searchReducer'

export default combineReducers({
    businesses: businessesReducer,
    business: businessReducer,
    search: searchReducer
})