import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './reducers/counterReducers'
import person from './reducers/personReducers'

export default combineReducers({
  routing: routerReducer,
  counter,
  person
})