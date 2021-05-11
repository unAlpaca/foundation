import { isObject,hasOwnProperty,isEqual } from "../shared/utils";
import { reactive } from "./reactive";

function createGetter(){
    return function get(target, key, receiver){
       
        const res = Reflect.get(target,key,receiver);
        if(isObject(res)){
            return reactive(res)
        }
        console.log('响应式获取' + target[key])
        return res

    }
}

function createSetter(){
    return function set(target, key, value, receiver){
         //不存在就添加
        const isKeyExist = hasOwnProperty(target, key),
                oldValue = target[key]


        const res = Reflect.set(target,key,value,receiver);


        if(!isKeyExist){
            console.log('像饮食新增' + value);

        }else if(!isEqual(value,oldValue)){
            console.log('像饮食xiugai ' + value);
        }

        console.log('响应式设置' + key + '=' + value)
        return res
    }
}

const get = createGetter();
const set = createSetter();

const mutableHandler = {
    get,
    set
}

export {
    mutableHandler
}