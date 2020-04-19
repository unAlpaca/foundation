

//同步遇到某个不返回undefined的监听函数回多次执行

class SyncLoopHook{
    constructor(args){
        this.tasks = [];
    }

    //订阅
    tap(name,task){
        this.tasks.push(task)
    }

    call(...args){

        this.tasks.forEach((task)=>{
            let ret
            do{
                ret = task(...args)
            }while(ret !=undefined)
        })
    }
}

let hook = new SyncLoopHook();
let num = 0;
hook.tap('node',(args)=>{
    console.log('node',args);
    num++
    return num == 3? undefined :'node ok'
    
})

hook.tap('js',(data)=>{
    console.log('js',data);
})

hook.tap('webpack',(data)=>{
    console.log('webpack',data);
})

hook.call('lrg')