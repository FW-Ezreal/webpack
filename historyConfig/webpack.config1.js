var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
var UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
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
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'}
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              outputPath: 'image/'
            }
          }
        ]
      },
      {
        test: /\.(html|htm)$/,
        use: { 
          loader:'html-withimg-loader',
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        },
        exclude: /node_modules/
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
    // new UglifyjsWebpackPlugin()
  ]

}