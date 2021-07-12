const path = require("path");

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),

        environment: {

            arrowFunction: false,
        },
    },
    context: path.resolve(__dirname, "src"),
    plugins: [
        new CleanWebpackPlugin(),
    ],
    //  mode: "production",
    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        }, ]
    },
    devServer: {
        contentBase: '.dist',
        open: true,
        port: 8080,
        hot: true,
        writeToDisk: true
    }
};