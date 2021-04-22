/**
 * 解决问题：then可以传递*/ 



const PENDING = 'PENDENG'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

function resolvePromise(promise2,resolve,reject,x){
    console.log(promise2);
    console.log(resolve);
    console.log(reject);
    console.log(x);
}

class MyPromise{
    constructor(executor){
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onFulfilledCallbackArr = [];
        this.onRejectedCallbackArr = [];

        const resolve = (value) => {
            if(this.status == PENDING){
                this.status = FULFILLED;
                this.value = value;
                //发布
                this.onFulfilledCallbackArr.forEach((fn)=>fn())
            }
        }

        const reject = (reason) =>{
            if(this.status == PENDING){
                this.status = REJECTED;
                this.reason = reason;
                //发布
                this.onRejectedCallbackArr.forEach((fn)=>fn())
            }
        }
        try{
            executor(resolve,reject)
        } catch(e){
            reject(e)
        }
    }

    then(onFulfilled,onRejected){
        //这里默认返回一个promise.then,
        //因为这个then会走下一个then的成功回调,报错则失败回调
        let promise2 = new Promise((resolve,reject)=>{
            if(this.status === FULFILLED){
                setTimeout(()=>{
                    try{
                        //这些处理结果如果是promise就返回promise,如果不是就包裹一层返回
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2,resolve,reject,x)
                    }catch(e){
                        reject(e)
                    }
                })
            }
    
            if(this.status === REJECTED){
                setTimeout(()=>{
                    try{
                        let x = onRejected(this.reason)
                        resolvePromise(promise2,resolve,reject,x)
                    }catch(e){
                        reject(e)
                    }
                })
            }
    
            if(this.status === PENDING){
                // 订阅的过程
                this.onFulfilledCallbackArr.push(()=>{
                    try{
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2,resolve,reject,x)
                    }catch(e){
                        reject(e)
                    }
                })
                this.onRejectedCallbackArr.push(()=>{
                    try{
                        let x = onRejected(this.reason)
                        resolvePromise(promise2,resolve,reject,x)
                    }catch(e){
                        reject(e)
                    }                    
                })
            }
        })

        return promise2
        
    }
}

module.exports = MyPromise