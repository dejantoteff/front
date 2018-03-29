process.env.NODE_ENV = 'development'

const { 
  envs, 
  hot, 
  devServer,
  cssRule,
  resolve,
  devTypescriptRule,
  devEntry, 
} =  require('./files/config')


const plugins = [
  hot,
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
