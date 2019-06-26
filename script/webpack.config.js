const HtmlWebpackPlugin = require('html-webpack-plugin');
const pageConfig = require('../page.config');
const baseConfig = require('./base.config');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
module.exports = function() {
  const webpackConfig = baseConfig();
  const entryPath = {};
  pageConfig.pages.forEach((metaData) => {
    const entry = metaData.entry.substring(0, metaData.entry.length - 5);

    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      filename: metaData.entry,
      title: metaData.title,
      template: path.posix.join(rootDir, 'index.html'),
      chunks: [entry]
    }));
    entryPath[entry] = metaData.src;
  })
  webpackConfig.entry = entryPath;
  return webpackConfig;
}