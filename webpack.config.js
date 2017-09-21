const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const plugins = [
  new CleanWebpackPlugin([ 'dist' ]),
      new ExtractTextPlugin({
        filename: '[name].[hash:8].css',
        allChunks: true
    }),
  new HtmlWebpackPlugin({ title : 'Foo' }),
  new HtmlWebpackHarddiskPlugin({ alwaysWriteToDisk : true }),
  new webpack.HotModuleReplacementPlugin(),
]

const devServer = {
  contentBase        : './dist',
  hot                : true,
  historyApiFallback : true,
  quiet              : false,
  headers            : { 'Access-Control-Allow-Origin' : '*' },
}

const entryB = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  //'babel-polyfill',
  './src/index.tsx',
]
const entry = './src/index.tsx'

const output = {
  filename : 'bundle.js',
  path     : __dirname + '/dist',
}

const rules = [
  {
    test   : /\.tsx?$/,
    loader : 'awesome-typescript-loader',
  },
  // { test: /\.css$/, loaders: ["style-loader","css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5],typed-css-modules"]},

  {
    test : /\.css$/,
    use  : [
      { loader : 'style-loader' },
      {
        loader  : 'css-loader',
        options : {
          modules        : true,
          importLoaders  : 1,
          camelCase      : true,
          localIdentName : '[name]_[local]_[hash:base64:5]',
        },
      },
      {
        loader  : 'typed-css-modules-loader',
        options : { camelCase : true },
      },
    ],
  },
]

module.exports = {
  entry   : entry,
  output  : output,
  plugins : plugins,

  resolve : { extensions : [ '.ts', '.tsx', '.js', '.json' ] },

  module : { rules : rules },
}
