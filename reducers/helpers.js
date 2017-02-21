export function makeReducer(createUpdate, defaults = {}) {
  return function reduce(state, action) {
    const update = createUpdate(action)
    return Object.assign({}, state || defaults, update || {})
  }
}
