import {initState} from './init'

// options api

// 1. Vue的构造函数，
function Vue(options){
    this._init(options)
}

// 2.初始化函数，就是把实例保存为vm,并把各种选项保存
Vue.prototype._init = function(options){
    var vm = this;
    vm.$options = options;

    // 对return() {returm {}}
    initState(vm);
}


export default Vue