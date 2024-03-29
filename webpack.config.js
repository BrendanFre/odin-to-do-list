const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        publicPath: "/odin-to-do-list/",

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ESLintPlugin()
    ],
}