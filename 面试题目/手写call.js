~function(){
    function myCall(context,...args){
        //this ==> func
        context = context == undefined?window:context; 

        //如果传入的context不是对象会有问题，这里处理,进行对象化
        //(字符串和数字) 可以 new String,new Number对象化
        //bigInt 和 Symbol 需要 Object()来对象化

        let type = typeof context;
        if(!/^(object|function)$/.test(type)){

            if((/^(symbol|bigint)$/.test(type)){
                context = Object(context)
            }else{
                context = new context.constructor(context)
            }
        }

        //创建唯一的属性值
        let key = Symbol('key');
        context[key] = this;
        
        let res = context[key](...args) 

        //释放雷村
        delete context[key]
        return res
    }

    Function.prototype.myCall = myCall;

}()

let obj = {
    name:'李若谷'
}

function func(x,y){
    this.total = x + y;
    return this
}

let res = func.myCall(obj,100,200)

console.log(res); // res ==> {name:'alibaba',total:300}
