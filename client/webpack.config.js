const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CssWebPackPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

const cssPlugin = new CssWebPackPlugin({
    filename: "[name].css",
    chunkFilename: '[id].css'
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]".js
    },
    plugins: [htmlPlugin, cssPlugin],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/,
            use: [CssWebPackPlugin.loader, 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    devServer: {
        historyApiFallback: true,
    }
};