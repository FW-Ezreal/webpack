var obj = require('./1.js');
require('./index.css');
console.log('haha');
var oDiv = document.createElement('div');
console.log('odiv', oDiv);

oDiv.innerHTML = 'i am not oDiv';
document.body.appendChild(oDiv);
console.log(obj.a)