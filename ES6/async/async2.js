function func1(){
    console.log('func1 start');  //4  11
    return new Promise(resolve=>{
        resolve('OK');  //5 12
    });
}
function func2(){
    console.log('func2 start'); //6
    return new Promise(resolve=>{ //7
        setTimeout(()=>{
            resolve('OK'); 
        },10);
    });
}
console.log(1);   // 1
setTimeout(async () => {
    console.log(2); //10
    await func1();
    console.log(3);
}, 20);
for (let i = 0; i < 90000000; i++) {} //循环大约要进行80MS左右       //推迟80ms  2
console.log(4);                 // 3
func1().then(result=>{
    console.log(5); //9 13
});
func2().then(result=>{
    console.log(6);  // 9
});
setTimeout(() => {
    console.log(7);  //10
}, 0);
console.log(8); //8

// 1 80ms 4 func1 start func2 start 8 5 2 func1 start 3 7 6

