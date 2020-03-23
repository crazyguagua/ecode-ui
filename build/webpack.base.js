const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); //引入清除文件插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV === 'development'; // 是否是开发模式
module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/example.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.md$/,
                use: [{
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    },
                    {
                        loader: path.resolve(__dirname, '../md-loader/index.js')
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            /**** dev.js ****/
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
            chunkFilename: "[id].css"
        })

    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
        }
    }
};