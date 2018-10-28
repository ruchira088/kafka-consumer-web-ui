const path = require("path")
const webpack = require("webpack")

const isProductionMode = process.env.MODE === "PROD"

const apiSever =
    process.env.API_SERVER ||
        (() => {
            console.error("API_SERVER is NOT defined as an environment variable")
            process.exit(1)
        })()

const webpackConfig = {
    entry: "./app/Index.jsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "public", "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 8000,
        host: "0.0.0.0",
        historyApiFallback: true
    },
    devtool: "source-maps",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.(scss|css)$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.(png|jpg|jpeg|svg)$/,
            loader: ["file-loader?name=assets/[name].[ext]"]
        }]
    },
    plugins: [
        new webpack.EnvironmentPlugin({ API_SERVER: apiSever })
    ]
}

module.exports =
    Object.assign({}, webpackConfig, { mode: isProductionMode ? "production" : "development" })