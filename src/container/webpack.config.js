var webpack = require('webpack')
var configure = require('@simplify/webpack-config')

module.exports = configure({
  entry: {
    app: './src/index.js',
  },

  // Override any other Webpack settings here!
  // see: https://webpack.js.org/configuration/
})
