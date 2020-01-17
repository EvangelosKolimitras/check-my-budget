const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const MDA = {
    PUBLIC: "/",
    ENTRIES: ["./src/app/app.js" /*, "./playground/hoc.js"*/],
    TEMPLATE: "./src/app/index.html",
    ENV: "development",
    PUBLIC_PATH: path.join(__dirname, "/public")
}

const { PUBLIC, PUBLIC_PATH, ENTRIES, TEMPLATE } = MDA

module.exports = env => {
    const isProduction = env === "production"

    return {
        // Server
        devServer: {
            contentBase: PUBLIC_PATH,
            historyApiFallback: true,
            hot: true
        },

        // Dev
        devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",

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
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
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
            }),
            new MiniCssExtractPlugin()
        ]
    }
}
