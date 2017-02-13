import scour from 'scourjs'
import { getClient } from './contentfulClient'

export function loadPageContent(contentTypeId) {
  return getClient().getEntries({
    content_type: contentTypeId
  },{include: 10}).then((content) => {
    return scour(content).go('items', 0, 'fields')
  })
}
