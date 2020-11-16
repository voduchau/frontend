const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const resolve = (dirname) => {
    return path.join(__dirname, "src", dirname);
};
const plugins = [
    new ProgressBarPlugin({
        format:
            chalk.yellow("progess") +
            " [:bar] " +
            chalk.green.bold(":percent") +
            " (:msg)",
        clear: false,
    }),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   // filename: "./index.html",
    //   hash: true,
    //   favicon: './src/assets/images/logo.png'
    // }),
    new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css",
    }),
];
module.exports = (env,argv ) => {
    const isDevdMode = argv.mode === "development";
    const isProdMode = argv.mode === "production"
    return {
        output: {
            publicPath: "/",
            filename: "[name].[contenthash].js",
        },
        devServer: {
            port: 3301,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.(scss|sass|css)$/i,
                    use: [
                        isProdMode
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        {
                            loader: "css-loader",
                            // options: { minimize: isProdMode },
                        },
                        "resolve-url-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 10000,
                            },
                        },
                    ],
                },
                {
                    test: /\.(svg)$/i,
                    use: {
                        loader: "svg-sprite",
                    },
                },
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ],
        resolve: {
            alias: {
                "@modules": resolve("modules"),
                "@config": isProdMode
                    ? path.join(__dirname, "config.prod.js")
                    : argv.mode === "development"
                    ? path.join(__dirname, "config.dev.js")
                    : path.join(__dirname, "config.sandbox.js"),
                "@containers": resolve("modules/containers"),
                "@components": resolve("modules/components"),
                "@images": resolve("assets/images"),
                "@actions": resolve("actions"),
                "@reducers": resolve("reducers"),
                "@utils": resolve("utils"),
                "@api": resolve("modules/api"),
                "@assets": resolve("assets"),
                "@lang": resolve("lang"),
            },
            modules: ["node_modules", path.join(__dirname, "../node_modules")],
            extensions: [".web.js", ".js", ".json"],
        },
    }
};
