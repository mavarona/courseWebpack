const HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    // entry: {},
    // output: {},
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        }, {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader?minimize&sourceMap',
                'resolve-url-loader',
                'sass-loader?outputStyle=compressed&sourceMap'
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg|webp)$/i,
            use: [
                'file-loader?name=assets/[name].[ext]'
            ]
        }, {
            test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
            use: 'file-loader?name=assets/[name].[ext]'
        }, ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/template.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};