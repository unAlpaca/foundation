~function(){
    function myBind(context,...args){
        //this ==> func
        let _this = this
        context = context == undefined?window:context; 

        let type = typeof context;
        if(!/^(object|function)$/.test(type)){

            if((/^(symbol|bigint)$/.test(type))){
                context = Object(context)
            }else{
                context = new context.constructor(context)
            }
        }

        return function anonymous(...innerArgs){
            _this.call(context,...args.concat(innerArgs))
        }
    }

    Function.prototype.myBind = myBind

}()

let obj = {
    name:'李若谷',   
}

function func(x,y){
    this.total = x + y;
    return this
}

let res = func.myBind(obj,100,200)

console.log(res()); // res ==> {name:'alibaba',total:300}

//bind是不会立即执行，所以会预先处理，先绑定this，先传参等deng

