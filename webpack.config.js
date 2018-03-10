require('env')('special')
const webpack = require('webpack')

const named = new webpack.NamedModulesPlugin()
const envs = new webpack.EnvironmentPlugin([
  'COUCH_URL',
  'NGROK_URL',
  'NODE_ENV',
])
const hot = new webpack.HotModuleReplacementPlugin()
const plugins = [
  hot,
  named,
  envs,
]

const devServer = {
  contentBase      : './dev_dist',
  disableHostCheck : true,
  headers          : { 'Access-Control-Allow-Origin' : '*' },
  hot              : true,
  port             : 7000,
  watchOptions     : { poll : 30 },
}

const entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:7000',
  'webpack/hot/only-dev-server',
  './src/index.tsx',
]

const output = {
  filename : 'bundle.js',
  path     : __dirname + '/dev_dist',
}

const tsxLoader = 'awesome-typescript-loader?useBabel=true&useCache=true'
const use = [
  { loader: 'cache-loader' },
  tsxLoader
]
const typescriptRule = {
  test    : /\.tsx?$/,
  use,
  // loader  : tsxLoader,
  include : [ `${ __dirname }/src`, `${ __dirname }/node_modules/notify/` ],
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
}
const sourceMapRule = {
  enforce : 'pre',
  test    : /\.js$/,
  loader  : 'source-map-loader',
}
const cssRule = {
  test : /\.css$/,
  use  : [ 'style-loader', 'css-loader' ],
}
const rules = [
  typescriptRule,
  // sourceMapRule,
  cssRule,
]
const mode = 'development'
const devtool = "eval"
// const devtool = "inline-source-map"

module.exports = {
  entry,
  mode,
  devtool,
  output,
  devServer,
  plugins,
  resolve : { extensions : [ '.ts', '.tsx', '.js' ] },
  module  : { rules : rules },
}
