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

const clean = new CleanWebpackPlugin([ 'dist' ])
const env = new webpack.EnvironmentPlugin([
  'COUCH_URL',
  'NODE_ENV',
])

const chunks = new webpack.optimize.CommonsChunkPlugin({ names : ['vendor', 'runtime'] })
const merge = new webpack.optimize.AggressiveMergingPlugin()
const ids = new webpack.HashedModuleIdsPlugin()

const html = new HtmlWebpackPlugin({
  title             : 'I Learn Smarter',
  xhtml             : true,
  alwaysWriteToDisk : true,
  favicon           : './files/favicon.ico',
})

const uglify = new UglifyJSPlugin({ 
  sourceMap : true
})

const plugins = [
  clean,
  env,
  chunks,
  merge,
  ids,
  html,
  extractLess,
  uglify,
]

const vendors = [
  'connected-react-router',
  'history',
  'rambdax',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
]

const entry = {
  main   : './src/index.tsx',
  vendor : vendors,
}

const tsxLoader = 'awesome-typescript-loader'

const typescriptRule = {
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
  include : [ `${ __dirname }/src`, `${ __dirname }/node_modules/notify/` ],
  loader  : tsxLoader,
  test    : /\.tsx?$/,
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
  cssRule,
  lessRule,
  typescriptRule,
]

const devtool = 'nosources-source-map'

const output = {
  filename : '[name].[chunkhash].js',
  path     : path.resolve(__dirname, 'dist'),
}

const target = 'web'

const resolve = {
  extensions: [ 
    '.ts', 
    '.tsx', 
    '.js'
  ]
}

module.exports = {
  devtool,
  entry,
  module  : { rules },
  output,
  plugins,
  resolve,
  target,
}
