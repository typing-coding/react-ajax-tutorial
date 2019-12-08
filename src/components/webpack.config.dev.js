var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "./src/js/index.js"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module  : {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname,'src/js')
            ],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        },{
            test: /\.css$/,
            loaders : ['style','css']
        }]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: 'inline-source-map'
}
