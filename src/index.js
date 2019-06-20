var obj = require('./1.js');
require('./index.css');
require('./index.less');
console.log('haha');
var oDiv = document.createElement('div');
oDiv.setAttribute('class', 'demo1');
console.log('odiv', oDiv);

oDiv.innerHTML = 'i am not oDiv';
document.body.appendChild(oDiv);
console.log(obj.a)