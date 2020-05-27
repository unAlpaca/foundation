/**
 * 在上面的版本中，我们的初始化结果只考虑了普通的object，下面我们只需要把初始化代码稍微一变，就可以兼容数组了：
*/

function clone(target){
    if(typeof target == Object){
        let cloneTarget = Array.isArray(target)? [] : {};
        for(let key in target){
            cloneTarget[key] = arguments.callee(target[key])
        }
    }else{
        return target
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5:[1,2,3,4,5]
};

console.log(clone(target));