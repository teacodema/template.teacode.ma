// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pug = {
  test: /\.pug$/,
  use: ['html-loader', 'pug-html-loader']
};
const sass =  {
  test: /\.sass$/,
  use: ['css-loader', 'sass-loader'],
};

const config = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/app.js'
  },
  module: {
    rules: [pug, sass]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.pug',
      inject: false,
      minify: false
    })
	]
};
module.exports = config;