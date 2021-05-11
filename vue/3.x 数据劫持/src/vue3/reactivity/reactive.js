import { isObject } from "../shared/utils";
import { mutableHandler } from './mutableHandler'

function reactive(target){
    return createReactiveObject(target, mutableHandler)
}

function createReactiveObject(target, baseHandler){
    if(!isObject(target)){
        return target
    }
    const observer = new Proxy(target, baseHandler);
    return observer
}
// const proxy = new Proxy(target, {
//     get(target, key, value, receiver){

//     },
//     set(target, key, value, receiver){
        
//     }
// })

export {
    reactive
}