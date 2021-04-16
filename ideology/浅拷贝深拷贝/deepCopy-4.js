/**
 * 循环引用的问题：
 * 解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，
 * 当需要拷贝当前对象时，先去存储空间中找，
 * 有没有拷贝过这个对象， 如果有的话直接返回，
 * 如果没有的话继续拷贝。
*/

function clone(target,map=new Map()){
    if(typeof target == Object){
        let cloneTarget = Array.isArray(target)? [] : {};
        if(map.has(target)) return map.get(target)
        map.set(target,cloneTarget)
        for(let key in target){
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget
    }else{
        return target
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;
console.log(clone(target));

//上面Map 可以换成 WeakMap
