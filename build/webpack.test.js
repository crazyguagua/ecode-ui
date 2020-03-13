const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, '../test/index.js')
  },
  output:{
    path: path.resolve(__dirname, '../test'),
    filename: '[name].js'
  },
  module: {
    rules: [
     
    ]
  },
  plugins: [

  ]
});