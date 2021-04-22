const MyPromise = require('./MyPromise2')

let promise = new MyPromise((resolve,reject)=>{
    // reject('Error')
    // throw new Error('AUTO ERR')
    setTimeout(function(){
        resolve('ok')
    },2000)
})

promise.then((value)=>{
    console.log('FullFilled: ' + value);
},(reason)=>{
    console.log('Rejected: ' + reason);
})




