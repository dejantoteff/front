process.env.NODE_ENV = 'development'

const { 
  cssRule,
  devEntry, 
  devHtml,
  devServer,
  devTypescriptRule,
  dll, 
  envs, 
  hot, 
  resolve,
} =  require('./files/config')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const plugins = [
  hot,
  new FriendlyErrorsWebpackPlugin(),
  // devHtml,
  // dll,
  envs,
]

const output = {
  filename : 'bundle.js',
  path     : `${__dirname}/dev_dist`,
}

const rules = [
  devTypescriptRule,
  // sourceMapRule,
  cssRule,
]

const mode = 'development'

const devtool = 'eval'

module.exports = {
  entry: devEntry,
  mode,
  devtool,
  output,
  devServer,
  plugins,
  resolve,
  module  : { rules },
}
