const requests = (state = [], action) => {
  switch (action.type) {
    case 'APPEND_REQUEST_FULFILLED':
      return [action.payload].concat(state.slice())
    case 'RESET_REQUESTS':
      return state.filter(() => {return false })
    default:
      return state 
  }
}
