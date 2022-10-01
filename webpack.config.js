const path = require('path');
const { webpack } = require('webpack');


module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname,'./'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'./'),
        publicPath: '/assets'
    },
    // enable to improve bundle.js debugging 
    // devtool: '#eval-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
                {
            test: /\.css$/,
            use: ['style-loader','css-loader']
    }]
    },
    // plugins: [
    //     new webpack.optimize.LimitChunkCountPlugin({
    //         maxChunks: 1,
    //     }),
    // ],

};

