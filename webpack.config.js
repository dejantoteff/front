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
  contentBase        : './dist',
  hot                : true,
  historyApiFallback : true,
  quiet              : false,
  headers            : { 'Access-Control-Allow-Origin' : '*' },
}

const entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  //'babel-polyfill',
  './src/index.tsx',
]
const entryB = './src/index.tsx'

const output = {
  filename : 'bundle.js',
  path     : __dirname + '/dist',
}

const rules = [
  {
    test   : /\.tsx?$/,
    loader : 'awesome-typescript-loader',
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
]

module.exports = {
  entry   : entry,
  output  : output,
  plugins : plugins,

  resolve : { extensions : [ '.ts', '.tsx', '.js', '.json' ] },

  module : { rules : rules },
}
