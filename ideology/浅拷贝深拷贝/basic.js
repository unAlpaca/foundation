
//浅拷贝
function clone(target){
    let cloneTarget = {}
    for(let key in target){
        cloneTarget[key] = target[key]
    }
    return cloneTarget
}