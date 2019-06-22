const path = require('path');
const env = process.env.NODE_ENV;
const rootDir = path.resolve(__dirname, '..');
module.exports = function(userConfig) {
  return {
    mode: env,
    output: {
      path: path.posix.join(rootDir, 'dist', 'netsong'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'post-loader']
        }
      ]
    },
    plugins: []
  }
}