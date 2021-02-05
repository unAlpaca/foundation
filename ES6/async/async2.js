function func1(){
    console.log('func1 start');
    return new Promise(resolve=>{
        resolve('OK');
    });
}
function func2(){
    console.log('func2 start');
    return new Promise(resolve=>{
        setTimeout(()=>{  //s2
            resolve('OK'); 
        },10);
    });
}
console.log(1);
setTimeout(async () => {  //s1
    console.log(2);
    await func1();
    console.log(3);
}, 20);
for (let i = 0; i < 90000000; i++) {} //循环大约要进行80MS左右       //推迟80ms  2
console.log(4);
func1().then(result=>{
    console.log(5);
});
func2().then(result=>{
    console.log(6);
});
setTimeout(() => { //s3
    console.log(7);
}, 0);
console.log(8);

// 1
// 遇到setTimeout1   宏任务：[s1]
// 80ms
// 4
// func1 start fc1.then放进微任务          宏任务[s1] 微任务：[fc1.then]
// func2 start setTimeout2放进红任务，      宏任务[s1，s2] 微任务：[fc1.then]
// s3放进宏任务                             宏任务[s1，s2，s3] 微任务：[fc1.then]
// 8
// 5 微任务，fc1.then
// 2 宏任务依次执行，s1 [s2,s3]
// func1 start
// 3 s1执行完  宏任务[s2，s3]
//   s2执行， 10ms后输出
// 7 s3执行，当前输出
// 6 s2执行完毕

//以上错误，微任务和红任务只存在同一条任务队列，

/**
 * setTimeout 宏任务
 * promise自身会立即执行 promise.then 微任务
*/
