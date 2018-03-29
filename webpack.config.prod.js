process.env.NODE_ENV = 'production'

const {
  clean,
  cssRule,
  envs,
  html,
  ids,
  optimization,
  prodTypescriptRule,
  resolve,
  sitemap,
  uglify,
} = require('./files/config')

const plugins = [
  clean,
  envs,
  uglify,
  html,
  ids,
  sitemap,
]

const entry = { main   : './src/index.tsx' }
const rules = [ cssRule, prodTypescriptRule]

const devtool = 'nosources-source-map'
const target = 'web'
const mode = 'development'

const output = {
  filename : '[name].[chunkhash].js',
  path     : `${__dirname}/dist`,
}

module.exports = {
  mode,
  devtool,
  optimization,
  entry,
  module  : { rules },
  output,
  plugins,
  resolve,
  target,
}
