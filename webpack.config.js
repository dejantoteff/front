const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const plugins = [
  new CleanWebpackPlugin([ 'dist' ]),
  new HtmlWebpackPlugin({ title : 'Foo' }),
  new webpack.HotModuleReplacementPlugin(),
]

const devServer = {
  contentBase : './dist',
  hot         : true,
}

const entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
//  'babel-polyfill',
  './src/index.tsx',
]

//const entry = "./src/index.tsx",

module.exports = {
  entry  : entry,
  output : {
    filename : 'bundle.js',
    path     : __dirname + '/dist',
  },
  plugins : plugins,

  //devtool: "source-map",

  resolve : { extensions : [ '.ts', '.tsx', '.js', '.json' ] },

  module : {
    rules : [
      {
        test   : /\.tsx?$/,
        loader : 'awesome-typescript-loader',
      },

      //All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // {
      //   enforce : 'pre',
      //   test    : /\.js$/,
      //   loader  : 'source-map-loader',
      // },
    ],
  },
}
