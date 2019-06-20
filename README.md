npx webpack 使文件打包，mode = production 时压缩，mode = development 不压缩
html-webpack-plugin 插件 
new HtmlWebpackPlugin({
  template: './xxx',
  hash
})
? uglifyjs 和mode = production 区别

extract-text-webpack-plugin 解决我们提取CSS的需求