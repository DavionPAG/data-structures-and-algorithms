'use strict';

let LL = require('./linked-list.js');

let newList = new LL();

newList.insert(1);
newList.insert(2);
newList.insert(3);

let inlist = newList.includes(3);

let nodeStr = newList.toString();

console.log('List ===> ', newList)
console.log('Includes ===> ', inlist)
console.log('String ===> ', nodeStr)