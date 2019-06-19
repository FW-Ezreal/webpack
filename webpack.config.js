var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
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
  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true
    })
  ]

}