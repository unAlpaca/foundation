// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        console.log(10);
        setTimeout(() => {
            console.log(11);
            resolve(2 * num)
        }, 2000);
    })
}

async function testResult () {
    console.log(3);
    
    let result = await doubleAfter2seconds(30).then(()=>{
        console.log(12);
    });

    return new Promise((resolve,reject)=>{
        console.log(4,result);
        resolve(result)
    })


}

console.log(1);

testResult().then(res=>{
    console.log(res);
    console.log(20);
});

console.log(2);

//1
//3
//10  红任务：[s1,]
//2
//11 微任务[12,]
//12
// 4 微任务 [res,20]
// res
// 20
