const webpack = require('webpack');
const webpackConfig = require('../script/webpack.config')();
const chalk = require('chalk');
console.log('【变异】');

// webpack(webpackConfig);
const compiler = webpack(webpackConfig);

compiler.run(function(err, stats) {
  if (err) {
    console.log(chalk.red('[打包错误]'));
    console.error(err);
    return;
  }
  console.log(stats.toString({
    modules: false,
    children: false,
    chunks: false,
    colors: true
  }));
  console.log(chalk.green('[打包完成]'),chalk.bold('动起你的小手把dist文件上传上线吧！'));
})