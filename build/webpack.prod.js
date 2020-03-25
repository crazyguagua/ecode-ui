const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../doc/main.js')
 },
 output: {
  path: path.resolve(__dirname, '../demo'),
  filename: '[name].[hash].js'
},
  module: {
    rules: [
     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../doc/index.html')
    }),
  ]
});