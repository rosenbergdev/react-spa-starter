/* eslint-disable */
"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var babelLoaderQuery = require('./babel.config.js');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    `webpack/hot/only-dev-server`,
    `./src/index.js` // Entry
  ],
  context: path.resolve(__dirname, '..'),
  devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components|public)/,
      loaders: ['babel?' + JSON.stringify(babelLoaderQuery), 'eslint-loader']
    },
    {
      test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
      loaders: [
        'style?sourceMap',
        'css'
      ]
    },
    {
      test: /[\/\\]src[\/\\].*\.styl/,
      exclude: /(node_modules|bower_components|public)/,
      loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase=dashes!postcss!stylus-loader"
    },
    {
      test: /[\/\\]src[\/\\].*\.css/,
      exclude: /(node_modules|bower_components|public)/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      ]
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "file"
    },
    {
      test: /\.(woff|woff2)$/,
      exclude: /(node_modules|bower_components)/,
      loader: "url?prefix=font/&limit=5000"
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    },
    {
      test: /\.gif/,
      exclude: /(node_modules|bower_components)/,
      loader: "url-loader?limit=10000&mimetype=image/gif"
    },
    {
      test: /\.jpg/,
      exclude: /(node_modules|bower_components)/,
      loader: "url-loader?limit=10000&mimetype=image/jpg"
    },
    {
      test: /\.png/,
      exclude: /(node_modules|bower_components)/,
      loader: "url-loader?limit=10000&mimetype=image/png"
    }
  ]},
  devServer: {
    contentBase: "./public",
    noInfo:true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};
/* eslint-enable */
