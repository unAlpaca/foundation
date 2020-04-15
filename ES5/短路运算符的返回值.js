var a = 64;
var b = 'key';

var result = a || b;
console.log(result) // 64 是 a的值

var result2 = a && b;
console.log(result2) // key 是 b的值


var c = false;

var result3 = a || c;
console.log(result3) // 64 是 a的值

var result4 = a && c;
console.log(result4) // false 是 c的值

var result5 = c || a;
console.log(result3) // 64 是 a的值

var result6 = c && a;
console.log(result4) // key 是 c的值

var result7 = c && 0;
console.log(result7) // false c的值
