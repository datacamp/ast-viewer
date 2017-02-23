var webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    node: {
        module: "empty",
        net: "empty",
        fs: "empty"
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.ace': "ace"
        })
    ],
    module: {
        loaders: [  {
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015',
            exclude: /(node_modules|bower_components|grammar)/
            }
        ]
    }
};
