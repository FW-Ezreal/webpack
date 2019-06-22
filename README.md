npx webpack 使文件打包，mode = production 时压缩，mode = development 不压缩
html-webpack-plugin 插件 
new HtmlWebpackPlugin({
  template: './xxx',
  hash
})
? uglifyjs 和mode = production 区别

extract-text-webpack-plugin 解决我们提取CSS的需求

js -> babel-loader @babel/core @babel/preset-env

cross-env能跨平台地设置及使用环境变量

大多数情况下，在windows平台下使用类似于: NODE_ENV=production的命令行指令会卡住，windows平台与POSIX在使用命令行时有许多区别（例如在POSIX，使用$ENV_VAR,在windows，使用%ENV_VAR%。。。）

cross-env让这一切变得简单，不同平台使用唯一指令，无需担心跨平台问题
cross-env NODE_ENV=production webpack --config build/webpack.config.js

console.log(chalk.blue(['打包完成']))
console.log(chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
))