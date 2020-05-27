/**
 * 如果是深拷贝的话，考虑到我们要拷贝的对象是不知道有多少层深度的，我们可以用递归来解决问题，稍微改写上面的代码：

如果是原始类型，无需继续拷贝，直接返回
如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。

很容易理解，如果有更深层次的对象可以继续递归直到属性为原始类型，这样我们就完成了一个最简单的深拷贝：

作者：ConardLi
链接：https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

function clone(target){

    if(typeof target == Object){
        let cloneTarget = {};
        for(let key in target ){
            cloneTarget[key] = arguments.callee(target[key])
        }
        return cloneTarget
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
    }
};

console.log(clone(target));

