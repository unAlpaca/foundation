/**
 * 解决问题：resolvePromise里面的处理*/ 



const PENDING = 'PENDENG'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

// Object.defineProperty(x,then,{
//     get(){
//         throw new Error()
//     }
// })

function resolvePromise(promise2,resolve,reject,x){
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    let called = false; //避免多次调用回调，resolve()后面接 reject(),只执行第一个

    if((typeof x === 'object' && x !== null) || typeof x === 'function'){
        try{
            let then = x.then //如果x是promise，就肯定有then,取值的时候也可能报错
        //Obje

            if(typeof then === 'function'){ // promise

                then.call(x,(y)=>{
                    if(called) return
                    called = true
                    // resolve(y) //这里改递归
                    resolvePromise(promise2,resolve,reject,y)
                },(r)=>{
                    if(called) return
                    called = true
                    reject(r)
                })

            }else{  //x就不是promise，是个普通值
                resolve(x)
            }
        }catch(e){
            if(called) return
            called = true
            reject(e)
        }
    }else{
        resolve(x)
    }
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

        //promise2.then().then().then().then().then()这个的报错,
        //是因为onFulfilled,onRejected没传
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value=>value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        //这里默认返回一个promise.then,
        //因为这个then会走下一个then的成功回调,报错则失败回调
        let promise2 = new MyPromise((resolve,reject)=>{
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


    //其实和then没区别
    catch(errCallback){
        return this.then(null,errCallback)
    }
}

module.exports = MyPromise