const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'simplify',
    projectName: 'products',
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
  })
}
