//NOTE IN CASE I FORGET
    //DONT HOST THIS PROJECT ANYWHERE - IM USING A YELP TOKEN THATS PUBLISHING DIRECTLY TO THE BUILD

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)