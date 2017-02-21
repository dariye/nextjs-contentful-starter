import  { makeReducer } from './helpers'

export const menu = makeReducer((action) => {
  switch (action.type) {
    case 'MENU':
      return { menu: action.menu }
  }
}
