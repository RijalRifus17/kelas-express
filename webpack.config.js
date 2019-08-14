const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
    entry: {
        index: './app/index.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test:   /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    externals: [nodeExternals()],
    target: 'node',
    watch: true,
    watchOptions: {
        ignored: [
            'node_modules'
        ],
        aggregateTimeout: 300,
        poll: 1000
    }
}

module.exports = config