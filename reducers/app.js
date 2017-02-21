import  { makeReducer } from './helpers'

export const app = makeReducer((action) => {
  switch (action.type) {
    case 'LOADED_CLIENT':
      return { authState: action.authState }
  }
}, authState: 'loading', CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID)
