const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.js');
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: path.resolve(__dirname, '../src/app.js')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        }]
    }
});