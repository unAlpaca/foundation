class Synchook{
    constructor(args){
        this.tasks = [];
    }

    //订阅
    tap(name,task){
        this.tasks.push(task)
    }

    call(...args){
        this.tasks.forEach((task)=>task(...args))
    }
}

let hook = new Synchook();
hook.tap('node',(args)=>{
    console.log('node',args);
    
})

hook.tap('js',(args)=>{
    console.log('js',args);
    
})

hook.call('lrg')