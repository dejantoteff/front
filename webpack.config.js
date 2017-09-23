const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')

const plugins = [
  new CleanWebpackPlugin([ 'dist' ]),
  new webpack.DllReferencePlugin({
    context: process.cwd(),
    manifest: require("./files/vendor.json")
  }),
  new HtmlWebpackPlugin({title: 'Foo'}),
  new AddAssetHtmlPlugin({ filepath: require.resolve('./files/vendor.dll.js') }),
  new HtmlWebpackHarddiskPlugin({ alwaysWriteToDisk : true }),
  new webpack.HotModuleReplacementPlugin(),
]

const devServer = {
  contentBase        : './dist',
  disableHostCheck   : true,
  info               : false,
  headers            : { 'Access-Control-Allow-Origin' : '*' },
  hot                : true,
  watchOptions: {
    poll: 100
  }
}

const entry = './src/index.tsx'
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
  resolve : { extensions : [ '.ts', '.tsx', '.js' ] },
  module : { rules : rules },
}
