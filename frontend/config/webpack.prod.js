/* webpack.prod.js */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
require('dotenv').config();

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_BASE_PATH = process.env.API_BASE_PATH || 'http://localhost:8080';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV),
                'API_BASE_PATH': JSON.stringify(API_BASE_PATH),
            }
        })
    ]
});
