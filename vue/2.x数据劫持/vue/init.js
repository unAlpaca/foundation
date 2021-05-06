import proxyData from './proxy'
import observe from './observe'

function initState(vm){
    var options = vm.$options;

    //可能没有data
    if(options.data){
        initData(vm)
    }
}

function initData(vm){
    var data = vm.$options.data;

    // 3.不直接操作元对象，用一个临时对象
     vm._data = data = typeof data === 'function' ? data.call(vm) : data || {}

    // 4.代理，这个data 在vm上，可以通过this. vm. data都能拿到
    for(var key in data){
        proxyData(vm, '_data' ,key)
    }

    //5. 数据观察
    observe(data)
}




export {
    initState
}