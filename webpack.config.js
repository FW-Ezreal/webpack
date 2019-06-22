var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
// var UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    home: './src/page/home/index.js',
    about: './src/page/about/index.js'
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
      filename: 'home.html',
      hash: true,
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'about.html',
      hash: true,
      chunks: ['about']
    }),
    new CleanWebpackPlugin()
    // new UglifyjsWebpackPlugin()
  ]

}