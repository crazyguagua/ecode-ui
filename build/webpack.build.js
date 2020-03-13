const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const package = require('../package.json')
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output:{
    path: path.resolve(__dirname, '../pub'),
    filename: '[name].js'
  },
  module: {
    rules: [
     
    ]
  },
  plugins: [

  ]
});