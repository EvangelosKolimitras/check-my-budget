const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const MDA = {
        PUBLIC: "/",
        ENTRIES: ["./src/app/app.js" /*, "./playground/hoc.js"*/],
        TEMPLATE: "./src/app/index.html",
        ENV: "development",
        PUBLIC_PATH: path.join(__dirname, "/public")
}

const { PUBLIC, PUBLIC_PATH, ENTRIES, TEMPLATE } = MDA

module.exports = {
        // Server
        devServer: {
                contentBase: PUBLIC_PATH,
                historyApiFallback: true,
                hot: true
        },

        // Dev
        devtool: "cheap-module-eval-source-map",

        // Entry point for starting the application
        entry: ENTRIES,

        // Modules
        module: {
                rules: [
                        // Babel loader

                        {
                                exclude: /node_modules/,
                                loader: "babel-loader",
                                test: /\.js$/
                        },

                        // sass loader

                        {
                                test: /\.(sa|sc|c)ss$/,
                                use: [
                                        "style-loader",
                                        "css-loader",
                                        "sass-loader"
                                ]
                        },

                        // file loader

                        {
                                test: /\.(png|jpe?g|gif)$/i,
                                use: [
                                        {
                                                loader: "file-loader"
                                        }
                                ]
                        }
                ]
        },

        resolve: {
                extensions: [".tsx", ".ts", ".js"]
        },

        // Output to the public folder
        output: {
                filename: "bundle.js",
                path: PUBLIC_PATH,
                publicPath: PUBLIC
        },

        // Plugins
        plugins: [
                new HtmlWebpackPlugin({
                        template: TEMPLATE
                })
        ]
}
