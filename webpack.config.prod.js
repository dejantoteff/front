const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

process.env.NODE_ENV = 'production'

const clean = new CleanWebpackPlugin([ 'dist' ])
const merge = new webpack.optimize.AggressiveMergingPlugin()
const ids = new webpack.HashedModuleIdsPlugin()
const uglify = new UglifyJSPlugin({ 
  sourceMap : true
})

const plugins = [
  clean,
  // merge,
  // ids,
  uglify,
]

const entry = {
  main   : './src/index.tsx',
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

const rules = [
  cssRule,
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
// const mode = 'development'
const mode = 'production'

module.exports = {
  mode,
  devtool,
  entry,
  module  : { rules },
  output,
  plugins,
  resolve,
  target,
}
