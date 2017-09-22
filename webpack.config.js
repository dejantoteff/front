const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const plugins = [
  new CleanWebpackPlugin([ 'dist' ]),
  new HtmlWebpackPlugin({ title : 'Foo' }),
  new HtmlWebpackHarddiskPlugin({ alwaysWriteToDisk : true }),
  new webpack.HotModuleReplacementPlugin(),
]

const devServer = {
  compress           : true,
  contentBase        : './dist',
  headers            : { 'Access-Control-Allow-Origin' : '*' },
  historyApiFallback : true,
  hot                : true,
  watchOptions       : { poll : true },
}

const entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './src/index.tsx',
]

const output = {
  filename : 'bundle.js',
  path     : __dirname + '/dist',
}

const rules = [
  {
    test   : /\.tsx?$/,
    loader : 'awesome-typescript-loader?useBabel=true&useCache=true',
  },
  {
    test : /\.css$/,
    use  : [ 'style-loader', 'css-loader' ],
  },
]

module.exports = {
  entry   : entry,
  output  : output,
  plugins : plugins,

  resolve : { extensions : [ '.ts', '.tsx', '.js', '.json' ] },

  module : { rules : rules },
}
