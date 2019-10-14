// //节流模式：屏蔽重复的事情，业务逻辑，只执行最后一次

// var throttle = function() {
//     var isClear = arguments[0];
//     var fn;

//     //如果第一个参数为布尔，pan'd
// }

// var data1 = { a: 1 },
//     data2 = { b: 2 },
//     obj = {};
// //为obj对象添加属性（将data1和data2作为属性名）
// obj[data1] = 1;
// obj[data2] = 2;
// console.log(obj);


// const map = new Map([
//     ['a', 1],
//     ['b', 2]
// ]);
// console.log(map.set([1, 2, 3], '3元素的数组'));
// //也可以链式添加
// map.set('name', '张三').set('age', 28);
// console.log(map);

var itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];
var dmpDept = itDiv.splice(3, 3);
var cisDept = itDiv;
console.log(dmpDept); 
console.log(itDiv); 