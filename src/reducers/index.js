import { combineReducers } from 'redux'

import businessesReducer from './businessesReducer'
import locReducer from './locReducer'

export default combineReducers({
    businesses: businessesReducer,
    location: locReducer
})