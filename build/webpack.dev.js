const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: path.resolve(__dirname, '../doc/main.js')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true
    },
    module: {
        rules: []
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../doc/index.html')
        }),
    ]
});