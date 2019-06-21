var obj = require('./1.js');
require('./index.css');
require('./index.less');
console.log('haha');
var oDiv = document.createElement('div');
oDiv.setAttribute('class', 'demo1');
console.log('odiv', oDiv);

const add = (a, b) => a + b;

const result = add(250, 250);
console.log('result', result);

oDiv.innerHTML = 'i am not oDiv';
document.body.appendChild(oDiv);
console.log(obj.a)