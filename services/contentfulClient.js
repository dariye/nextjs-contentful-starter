import { createClient } from 'contentful'

let client
let authorized

export function initClient(space, accessToken) {
  client = createClient({ 
      space: space,
      accessToken: accessToken
  })
  
  return client.getSpace()
    .then((space) => {
      authorized = true
      return space
    })
}

export function getClient() {
  return authorized && client
}

