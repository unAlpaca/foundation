

//只有在上一个函数返回undefined,才会继续往下执行

class SyncBallHook{
    constructor(args){
        this.tasks = [];
    }

    //订阅
    tap(name,task){
        this.tasks.push(task)
    }

    call(...args){

        let ret //当前函数返回值
        let index = 0; //当前执行函数索引
        do{
            ret = this.tasks[index](...args)
        }while(ret === undefined && index<this.tasks.length)
    }
}

let hook = new SyncBallHook();
hook.tap('node',(args)=>{
    console.log('node',args);
    return 'sss'
    
})

hook.tap('js',(args)=>{
    console.log('js',args);
    
})

hook.call('lrg')