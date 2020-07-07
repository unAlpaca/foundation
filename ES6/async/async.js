// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

async function testResult () {
    console.log(3);
    
    let result = await doubleAfter2seconds(30);

    console.log(4);
    
    console.log(result);
}

console.log(1);

testResult();

console.log(2);

// 2s 之后，输出了60. 