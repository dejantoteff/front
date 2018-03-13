const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'production'

const uglifyOptions = {
  output: {
    comments: false
  },
  compress: {
    unsafe_comps: true,
    properties: true,
    keep_fargs: false,
    pure_getters: true,
    collapse_vars: true,
    unsafe: true,
    warnings: false,
    screw_ie8: true,
    sequences: true,
    dead_code: true,
    drop_debugger: true,
    comparisons: true,
    conditionals: true,
    evaluate: true,
    booleans: true,
    loops: true,
    unused: true,
    hoist_funs: true,
    if_return: true,
    join_vars: true,
    cascade: true,
    drop_console: true
  }
}

const uglify = new UglifyJSPlugin({ 
  sourceMap : true,
  uglifyOptions
})

const clean = new CleanWebpackPlugin([ 'dist' ])
const env = new webpack.EnvironmentPlugin([
  'NODE_ENV'
])
const ids = new webpack.HashedModuleIdsPlugin()
const html = new HtmlWebpackPlugin({
  title             : 'I Learn Smarter',
  xhtml             : true,
  alwaysWriteToDisk : true,
  favicon           : './files/favicon.ico',
})

const plugins = [
  clean,
  env,
  // uglify,
  html,
  // ids,
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
const splitChunks = {
  name: 'common',
  chunks: 'all'
}
const optimization = {
  splitChunks, 
  runtimeChunk: true,
  concatenateModules: true,
  namedModules: true
}

// const mode = 'production'
const mode = 'development'

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
