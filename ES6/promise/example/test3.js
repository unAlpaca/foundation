const MyPromise = require('./MyPromise3')



let promise1 = new MyPromise((resolve,reject)=>{
    resolve('promise1')
})

let promise2 = promise1.then((value)=>{
    return value + '-> then -> pro'
})
.then((value)=>{
    console.log('FullFilled: ' + value);
})

