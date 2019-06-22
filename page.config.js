/** 
 * 多页面配置
 */
const pkg = require('./package.json');
module.exports = {
  name: pkg.name,
  desc: pkg.description,
  pages: [
    {
      entry: 'index.html',
      src: './src/page/index/index.js',
      title: '推荐'
    },
    {
      entry: 'home.html',
      src: './src/page/home/index.js',
      title: '推荐'
    },
    {
      entry: 'bang.html',
      src: './src/page/bang/index.js',
      title: '推荐'
    },
    {
      entry: 'about.html',
      src: './src/page/about/index.js',
      title: '推荐'
    },
  ]
}