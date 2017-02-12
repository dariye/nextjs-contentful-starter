import { combineReducers } from 'redux'

import api from './reducers/api'
import requests from './reducers/requests' 

const rootReducer = combineReducers({
  api,
  requests
})

export default rootReducer

