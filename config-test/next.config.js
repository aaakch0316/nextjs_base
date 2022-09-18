const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  console.log('config')
  const env = {
    NEXT_PUBLIC_ABC: 'envTest'
  }
  
  // next.config.js object
  return {
    env,
    reactStrictMode: true,
    swcMinify: true
  }
}