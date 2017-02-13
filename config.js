const prod = process.env.NODE_ENV === 'production'

const space = process.env.CONTENTFUL_SPACE_ID || 'CONTENTFUL_SPACE_ID_MISSING'
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'CONTENTFUL_ACCESS_TOKEN_MISSING'

module.exports = {
  'TEST_ENV_VAR': prod? `I'm in production` : `I'm in development`,
  'CONTENTFUL_SPACE_ID': space,
  'CONTENTFUL_ACCESS_TOKEN': accessToken
}
