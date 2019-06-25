const webpackConfig = require('../script/webpack.config');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const chalk = require('chalk');
const url = require('url');
const address = require('address');
const pkg = require('../package.json');
const qrcode = require('qrcode-terminal');
console.log('host', process.env.HOST);

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8000;
const PROTOCOL = 'http';

let compiler;
try {
  compiler = webpack(webpackConfig);
} catch (error) {
  console.log('error!!');
  // process.exit(1);
}
const devServer = new WebpackDevServer(compiler,{});

devServer.listen(PORT, HOST, err => {
  if (err) {
    console.log('err')
  }
  console.log(chalk.cyan('正在启动 development server...\n'));
})
// const perpareUrls = (protocol, host, port) => {
//   const formatUrl = hostname => 
//     url.format({
//       protocol,
//       hostname,
//       port,
//       pathname: '/'
//     });
//     const prettyPrintUrl = hostname => 
//       url.format({
//         protocol,
//         hostname,
//         port: chalk.bold(port),
//         pathname: '/'
//       });
//     const isUnspecifiedHost = host === '0.0.0.0' || host === '::';
//     console.log('isUnspecifiedHost', isUnspecifiedHost)
//     let prettyHost, lanUrlForConfig, lanUrlForTerminal, lanUrllForQrcode;
//     if (isUnspecifiedHost) {
//       prettyHost = 'localhost';
//       try {
//         lanUrlForConfig = address.ip();

//         if (lanUrlForConfig) {
//           const flag = /^10[.]|^172[.](1[6-9]|2[0-9]|3[0-1])[.]|^192[.]168[.]/.test(
//             lanUrlForConfig);
//           if (flag) {
//             lanUrlForTerminal = prettyPrintUrl(lanUrlForConfig);
//             lanUrllForQrcode = formatUrl(lanUrlForConfig);
//           } else {
//             lanUrlForConfig = undefined;
//           }
//         }
//       } catch(e) {
//         // ignored
//       }
//     } else{
//       console.log('?')
//       // prettyHost = host;
//     }
//     const localUrlForTerminal = prettyPrintUrl(prettyHost);
//     const localUrlForBrowser = formatUrl(prettyHost);
//     return {
//       lanUrlForConfig,
//       lanUrlForTerminal,
//       lanUrllForQrcode,
//       localUrlForTerminal,
//       localUrlForBrowser,
//     };
// }
// const urls = perpareUrls(PROTOCOL, HOST, PORT);

// console.log(perpareUrls(pkg.name, urls))
// let compiler;
// try {
//   compiler = webpack(webpackConfig);
// } catch (error) {
//   console.log('error!!');
//   // process.exit(1);
// }
// compiler.plugin('done', stats => {
//   const messages = stats.toJson({}, true);
//   const isSuccessful = !messages.errors.length && !messages.warnings.length;
//   if (isSuccessful) {
//     printInstructions(pkg.name, urls);
//   }
// })

