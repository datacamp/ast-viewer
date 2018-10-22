var webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
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
        }),
        new VueLoaderPlugin(),
        // for build before grammars are present:
        // new webpack.IgnorePlugin(/grammar/)
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
                exclude: /(node_modules|bower_components|grammar)/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
              }
        ]
    }
};
