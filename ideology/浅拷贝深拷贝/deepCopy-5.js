/**
 * for ,while,for in这3个的效率 for in是最差的，while最好，所以可以有性能优化的地方
 * 改写for in
*/

function clone1(target,map=new Map()){
    if(typeof target == Object){
        let cloneTarget = Array.isArray(target)? [] : {};
        if(map.has(target)) return map.get(target)
        map.set(target,cloneTarget)
        for(let key in target){
            cloneTarget[key] = arguments.callee(target[key])
        }
        return cloneTarget
    }else{
        return target
    }
}

function clone2(target,map=new WeakMap()){
    if(typeof target == Object){
        let cloneTarget = Array.isArray(target)? [] : {};
        if(map.has(target)) return map.get(target)
        map.set(target,cloneTarget)
        const keys = Array.isArray(target)?undefined:Object.keys(target);
        forEach(keys || target,(key,value)=>{
            if(keys) key = value
            cloneTarget[key] = arguments.callee(target[key])
        })

        return cloneTarget
    }else{
        return target
    }
}


function forEach(array,iterator){
    let index = 0;
    const len = array.length;
    while(index++ < len){
        iterator(index,array[index])
    }
}


const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;

console.time();
const result = clone1(target);
console.timeEnd();

console.time();
const result2 = clone2(target);
console.timeEnd();


//上面Map 可以换成 WeakMap
