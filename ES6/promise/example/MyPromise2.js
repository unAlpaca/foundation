/**
 * 解决问题：多个promise按顺序调用，多个回调添加*/ 



const PENDING = 'PENDENG'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

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
        if(this.status === FULFILLED){
            onFulfilled(this.value)
        }

        if(this.status === REJECTED){
            onRejected(this.reason)
        }

        if(this.status === PENDING){
            // 订阅的过程
            this.onFulfilledCallbackArr.push(()=>{
                onFulfilled(this.value)
            })
            this.onRejectedCallbackArr.push(()=>{
                onRejected(this.reason)
            })
        }

    }

}

module.exports = MyPromise