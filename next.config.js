const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')

const plugins = [
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
  })
]

const config = {
  env: {
    API_URL: 'https://jsonplaceholder.typicode.com'
  }
}

module.exports = withPlugins(plugins, config)
