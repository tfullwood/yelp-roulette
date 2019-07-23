import { combineReducers } from 'redux'

import businessesReducer from './businessesReducer'
import locReducer from './locReducer'
import businessReducer from './businessReducer'

export default combineReducers({
    businesses: businessesReducer,
    location: locReducer,
    business: businessReducer
})