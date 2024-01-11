const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
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

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
}