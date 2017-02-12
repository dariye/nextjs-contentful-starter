export default (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_API_PREVIEW':
      return Object.assign({}, state, { selectedApi: action.isPreview ? 'preview' : 'delivery' })
    default: 
      return state
  }
}
