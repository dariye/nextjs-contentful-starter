import { combineReducers } from 'redux'

import api from './api'
import requests from './requests' 

const rootReducer = combineReducers({
  api,
  requests
})

export default rootReducer

