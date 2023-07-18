const { composePlugins, withNx } = require('@nx/webpack')
const { withReact } = require('@nx/react')
const { withModuleFederation } = require('@nx/react/module-federation')

const baseConfig = require('./module-federation.config')

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(withNx(), withReact(), withModuleFederation(baseConfig), config => {
  // Further customize webpack config
  config.module.rules.push({
    test: /\.svg$/i,
    // issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack', 'url-loader'],
  })

  return config
})
