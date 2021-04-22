const MyPromise = require('./MyPromise')



let promise = new MyPromise((resolve,reject)=>{
    resolve('promise1')
})

let promise = promise.then((value)=>{
    return value + '-> then -> pro'
})
.then((value)=>{
    console.log('FullFilled: ' + value);
})

