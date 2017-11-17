import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './reducers/counterReducers'

export default combineReducers({
  routing: routerReducer,
  counter
})