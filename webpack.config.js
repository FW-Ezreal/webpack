var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
var UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    index: './src/index.js',
    index1: './src/1.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: '1717'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      minify: {
        removeAttributeQuotes: true
      }
    }),
    new UglifyjsWebpackPlugin()
  ]

}