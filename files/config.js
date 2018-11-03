require('env')('special')
const webpack = require('webpack')

const AutoDllPlugin = require('autodll-webpack-plugin-webpack-4')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SitemapWebpackPlugin = require('sitemap-webpack-plugin').default
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const {getPaths} = require('./_helpers/getPaths')

// PRODUCTION
/////////////////
exports.clean = new CleanWebpackPlugin([ 'dist' ])

const uglifyOptions = {
  ecma: 8,
  compress: {
    inline: 1
  }
}

exports.uglify = new UglifyJSPlugin({ 
  sourceMap : false,
  uglifyOptions
})

exports.ids = new webpack.HashedModuleIdsPlugin()

const paths = ['/',...getPaths()]
exports.sitemap =  new SitemapWebpackPlugin('https://ilearnsmarter.com', paths)

exports.html = new HtmlWebpackPlugin({
  title             : 'I Learn Smarter',
  xhtml             : true,
  alwaysWriteToDisk : true,
  favicon           : './files/favicon.ico',
})

const prodTsxLoader = 'awesome-typescript-loader'
exports.prodTypescriptRule = {
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
  include : [ `${ process.cwd() }/src`, `${ process.cwd() }/node_modules/notify/` ],
  loader  : prodTsxLoader,
  test    : /\.tsx?$/,
}

const splitChunks = {
  name: 'common',
  chunks: 'all'
}
exports.optimization = {
  splitChunks, 
  runtimeChunk: true,
  concatenateModules: true,
  namedModules: true
}
// DEVELOPMENT
/////////////////
exports.devServer = {
  contentBase       : './dev_dist',
  disableHostCheck  : true,
  stats            : 'errors-only',
  host              : 'localhost',
  historyApiFallback: true,
  // quiet             : true,
  headers           : { 'Access-Control-Allow-Origin' : '*' },
  hot               : true,
  port              : 7000,
  watchOptions      : { poll : 30 },
}

exports.devEntry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:7000',
  'webpack/hot/only-dev-server',
  './src/index.tsx',
]

exports.hot = new webpack.HotModuleReplacementPlugin()

const devTsxLoader = 'awesome-typescript-loader?useBabel=true&useCache=true'
const devUse = [
  { loader: 'cache-loader' },
  devTsxLoader
]

exports.devTypescriptRule = {
  test    : /\.tsx?$/,
  use: devUse,
  include : [ `${ process.cwd() }/src`, `${ process.cwd() }/node_modules/notify/` ],
  exclude : [ /node_modules\/(?!(notify)\/).*/ ],
}

exports.sourceMapRule = {
  enforce : 'pre',
  test    : /\.js$/,
  loader  : 'source-map-loader',
}

exports.devHtml = new HtmlWebpackPlugin({
  title             : 'I Learn Smarter',
  alwaysWriteToDisk : true,
  favicon           : './files/favicon.ico',
})

exports.dll = new AutoDllPlugin({
  inject: true, // will inject the DLL bundle to index.html
  debug: true,
  filename: '[name]_[hash].js',
  path: './dll',
  entry: {
    vendor: [
      'create-action',
      'rambdax',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-observable',
      'rxjs',
    ]
  }
})

exports.error = new FriendlyErrorsWebpackPlugin()
// COMMON
/////////////////
exports.resolve = { extensions : [ '.ts', '.tsx', '.js' ] }

exports.envs = new webpack.EnvironmentPlugin([
  'NODE_ENV',
  'COUCH_URL',
  'NGROK_URL'
])

exports.cssRule = {
  test : /\.css$/,
  use  : [ 'style-loader', 'css-loader' ],
}
