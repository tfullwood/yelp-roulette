import { combineReducers } from 'redux'

import businessesReducer from './businessesReducer'
import businessReducer from './businessReducer'
import searchReducer from './searchReducer'
import errorsReducer from './errorsReducer'

export default combineReducers({
    businesses: businessesReducer,
    business: businessReducer,
    search: searchReducer,
    errors: errorsReducer
})