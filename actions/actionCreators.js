import * as contentService from '../services/contentStore'

export function setAppClientState(authState) {
  return {
    type: 'LOADED_CLIENT',
    authState
  }
}
