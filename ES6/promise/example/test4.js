const MyPromise = require('./MyPromise4')
let promise1 = new MyPromise((resolve,reject)=>{
    resolve('promise1')
})

let promise2 = promise1.then(()=>{
    // return promise2
    // return new Error('err')
    // return Promise.resolve('Promise resolve')

    // return new MyPromise((resolve,reject)=>{
    //     resolve('new MyPromise resolve')
    // })

    // return new MyPromise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve('new MyPromise resolve')
    //     })
    // })

    return new MyPromise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(new MyPromise((resolve,reject)=>{
                resolve(new MyPromise((resolve,reject)=>{
                    resolve('这个会返回， 所以需要递归调用')
                }))
            }))
        },2000)
    })    
},(reason)=>{
    return reason
})

promise2.then((value)=>{
    console.log(value);
},(reason)=>{
    console.log(reason);
})

//这个就会报错，所以在then的方法时候给定默认值
promise2.then().then().then().then().then().then().then((value)=>{
    console.log(value);
},(reason)=>{
    console.log(reason);
})