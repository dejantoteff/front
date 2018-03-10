require('env')('special')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const named = new webpack.NamedModulesPlugin()
const envs = new webpack.EnvironmentPlugin([
  'COUCH_URL',
  'NGROK_URL',
  'NODE_ENV',
])
const tsChecker = new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })
const watchIgnore = new webpack.WatchIgnorePlugin([
  /\.js$/,
  /\.d\.ts$/
])
const hot = new webpack.HotModuleReplacementPlugin()

const plugins = [
  named,
  envs,
  tsChecker,
  watchIgnore,
  hot
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

const use = [
  { loader: 'cache-loader' },
  {
      loader: 'thread-loader',
      options: {
          // there should be 1 cpu for the fork-ts-checker-webpack-plugin
          workers: require('os').cpus().length - 1,
      },
  },
  {
      loader: 'ts-loader',
      options: {
          happyPackMode: true,
          transpileOnly: true
      }
  }
]

const usex = [
  {
    loader: 'ts-loader',
    options: {
      happyPackMode: true,
      transpileOnly: true
    }
  }
]

const typescriptRule = {
  test: /\.tsx?$/,
  include : [ `${ __dirname }/src`, `${ __dirname }/node_modules/notify/` ],
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
  use
}
const cssRule = {
  test : /\.css$/,
  use  : [ 'style-loader', 'css-loader' ],
}
const rules = [
  typescriptRule,
  cssRule,
]
const mode = 'development'
// const devtool = "eval"
const devtool = "inline-source-map"

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
