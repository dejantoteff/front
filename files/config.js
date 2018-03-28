const webpack = require('webpack')

const envs = new webpack.EnvironmentPlugin([
  'NODE_ENV',
  'COUCH_URL',
  'NGROK_URL'
])

const hot = new webpack.HotModuleReplacementPlugin()

const devServer = {
  contentBase      : './dev_dist',
  disableHostCheck : true,
  host: 'localhost',
  historyApiFallback: true,
  headers          : { 'Access-Control-Allow-Origin' : '*' },
  hot              : true,
  port             : 7000,
  watchOptions     : { poll : 30 },
}

const devEntry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:7000',
  'webpack/hot/only-dev-server',
  './src/index.tsx',
]

const resolve = { extensions : [ '.ts', '.tsx', '.js' ] }

const cssRule = {
  test : /\.css$/,
  use  : [ 'style-loader', 'css-loader' ],
}

const devTsxLoader = 'awesome-typescript-loader?useBabel=true&useCache=true'
const devUse = [
  { loader: 'cache-loader' },
  devTsxLoader
]

const devTypescriptRule = {
  test    : /\.tsx?$/,
  use: devUse,
  include : [ `${ process.cwd() }/src`, `${ process.cwd() }/node_modules/notify/` ],
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
}

const sourceMapRule = {
  enforce : 'pre',
  test    : /\.js$/,
  loader  : 'source-map-loader',
}

exports.envs = envs
exports.devTypescriptRule = devTypescriptRule
exports.devUse = devUse
exports.sourceMapRule = sourceMapRule
exports.cssRule = cssRule
exports.resolve = resolve
exports.hot = hot
exports.devServer = devServer
exports.devEntry = devEntry