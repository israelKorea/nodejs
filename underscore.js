var _ = require('underscore');
var arr = [3,6,9,1,12];

console.log(arr[0]);
console.log('use underscore : ', _.first(arr));
console.log(arr[arr.length-1]);
console.log('use underscore : ', _.last(arr));

