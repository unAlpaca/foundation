

//上一个函数返回的结果 传给下一个函数

class SyncWaterfallHook{
    constructor(args){
        this.tasks = [];
    }

    //订阅
    tap(name,task){
        this.tasks.push(task)
    }

    call(...args){

        let [first,...others] = this.tasks;
        let ret = first(...args);
        others.reduce((oldValue,newValue)=>{
            return newValue(oldValue)
        },ret)
    }
}

let hook = new SyncWaterfallHook();
hook.tap('node',(args)=>{
    console.log('node',args);
    return 'node ok'
    
})

hook.tap('js',(data)=>{
    console.log('js',data);
    return 'js ok'
})

hook.tap('webpack',(data)=>{
    console.log('webpack',data);
    return 'webpack ok'
})

hook.call('lrg')