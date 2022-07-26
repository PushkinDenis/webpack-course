const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analitics:'./analitics.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

plugins: [
  new HTMLWebpackPlugin({
    template: './index.html'
  }),
  new CleanWebpackPlugin()
],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test:/\.(png|jpg|svg|gig)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource'
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  }
}
