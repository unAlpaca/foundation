
(function (){
    function myCall(context,...args){
        context = context == undefined ? window : context

        let type = typeof context
        if(!/^(object | function)$/.test(type)){
            if(/^(bigInt | symbol)$/.test(type)){
                context = Object(context)
            }else {
                context = new context.constructor(context)
            }
        }
        let key = Symbol('key')
        context[key] = this
        return context[key](...args)
    }
    Function.prototype.myCall = myCall
})()

(function (){
    function myBind(context,...args){
        context = context == undefined?window:context
        let type = typeof context
        if(!/^(object | function)$/.test(type)){
            if(/^(bigInt | symbol)$/.test(type)){
                context = Object(context)
            }else {
                context = new context.constructor(context)
            }
        }
        let _this = this
        return function anonymous(...innerArgs){
            _this.call(context,...args,...innerArgs)
        }
    }
    Function.prototype.myBind = myBind
})()

obj = {
    name:'liruogu'
}

function callName(arg){
    console.log(arg)
    console.log(this.name);
}

callName.call(obj,17)
callName.myCall(obj,17)