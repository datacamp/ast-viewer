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
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
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
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
};
