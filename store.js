import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer'

let store = null;

export const initStore = (initialState, isServer) => {
  if (typeof window === 'undefined') {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
    );
  }
  else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    if (!store) {
      store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
      );
    }
    return store;
  }
};
