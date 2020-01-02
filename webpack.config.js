const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  resolve:{
    alias:{
      '@': './alias'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',         
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [  
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};