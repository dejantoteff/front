require('env')('special')
const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const extractLess = new ExtractTextPlugin({
  filename : '[name].[contenthash].css',
  disable  : false,
})

process.env.NODE_ENV = 'production'

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new webpack.EnvironmentPlugin([
    'COUCH_URL',
    'NODE_ENV',
  ]),
  new HtmlWebpackPlugin({
    title             : 'I Learn Smarter',
    xhtml             : true,
    alwaysWriteToDisk : true,
    favicon           : './files/favicon.ico',
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime'
  }),
  extractLess,
  new UglifyJSPlugin(),
  new HtmlWebpackHarddiskPlugin(),
]

const vendors = [
  'history',
  'connected-react-router',
  'react-redux',
  'react-router',
  'redux',
  'preact',
  'preact-compat',
  'rambdax',
]

const entry = {
  main   : './src/index.tsx',
  vendor : vendors,
}

const tsxLoader = [
  'awesome-typescript-loader',
]

const typescriptRule = {
  test    : /\.tsx?$/,
  loader  : tsxLoader,
  include : [ `${ __dirname }/src`, `${ __dirname }/node_modules/notify/` ],
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
}

const cssRule = {
  test : /\.css$/,
  use  : [ 'style-loader', 'css-loader' ],
}

const lessRule = {
  test : /\.less$/,
  use  : extractLess.extract({ use : [ { loader : 'css-loader' }, { loader : 'less-loader' } ] }),
}

const rules = [
  typescriptRule,
  cssRule,
  lessRule,
]

const alias = {
  'react'     : 'preact-compat',
  'react-dom' : 'preact-compat',
}

const devtool =  'source-map'

const output = {
  filename: '[name].[chunkhash].js',
  path: path.resolve(__dirname, 'dist')
}

module.exports = {
  entry   : entry,
  output  : output,
  plugins : plugins,
  resolve : {
    extensions : [ '.ts', '.tsx', '.js' ],
    alias      : alias,
  },
  devtool: devtool,
  module : { rules : rules },
}
