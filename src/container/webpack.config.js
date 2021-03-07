const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const distFolder = path.resolve(process.cwd(), 'dist')

var config = {
  entry: {
    container: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].js',
    // path: distFolder,
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: distFolder,
    compress: true,
    port: 3010
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        // exclude: [/\.(html?)$/, /\.(ts|tsx|js|jsx)$/, /\.css$/, /\.scss$/, /\.json$/],
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets'
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: 'public',
          from: '**/*',
          to: path.join(__dirname, 'dist/'),
          globOptions: {
            dot: true,
            ignore: ['**/index.html', '**/temp/**']
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'Container',
      templateParameters: {
        PUBLIC_URL: '/'
      }
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  stats: 'minimal'
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
  }

  if (argv.mode === 'production') {
    config.stats = 'normal'
  }

  return config
}
