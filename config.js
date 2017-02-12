const prod = process.env.NODE_ENV === 'production'


module.exports = {
  'TEST_ENV_VAR': prod? `I'm in production` : `I'm in development`
}
