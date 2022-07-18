const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    analitics:'./src/analitics.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

plugins: [
  new HTMLWebpackPlugin({
    template: './src/index.html'
  }),
  new CleanWebpackPlugin()
]
}
