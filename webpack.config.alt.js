require('env')('special')

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AutoDllPlugin = require('autodll-webpack-plugin').default

const named = new webpack.NamedModulesPlugin()
const envs = new webpack.EnvironmentPlugin([
  'COUCH_URL',
  'NGROK_URL',
  'NODE_ENV',
])
const html =   new HtmlWebpackPlugin({
  title             : 'I Learn Smarter',
  alwaysWriteToDisk : true,
  favicon           : './files/favicon.ico',
})
const dll = new AutoDllPlugin({
  inject: true,
  filename: '[name]_[hash].js',
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
      'tslib'
    ]
  }
})
const htmlHard = new HtmlWebpackHarddiskPlugin()
const hot = new webpack.HotModuleReplacementPlugin()

const plugins = [
  named,
  envs,
  html,
  dll,
  htmlHard,
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

const tsxLoader = [
  'react-hot-loader/webpack',
  'awesome-typescript-loader?useBabel=true&useCache=true',
]

const typescriptRule = {
    test: /\.tsx?$/,
    include : [ `${ __dirname }/src`, `${ __dirname }/node_modules/notify/` ],
    exclude : [ /node_modules\/(?!(notify)\/).*/ ],
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
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

module.exports = {
  entry,
  mode,
  output,
  devServer,
  plugins,
  resolve : { extensions : [ '.ts', '.tsx', '.js' ] },
  module  : { rules : rules },
}
