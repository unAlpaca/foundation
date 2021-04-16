~function(){
    function myBind(context,...args){
        //this ==> func
        let _this = this
        context = context == undefined?window:context; 

        let type = typeof context;
        console.log(type);
        if(!/^(object|function)$/.test(type)){

            if((/^(symbol|bigint)$/.test(type))){
                context = new Object(context)
            }else{
                context = new context.constructor(context)
            }
        }

        return function anonymous(...innerArgs){
            console.log(arguments)

            _this.call(context,...args,...innerArgs)
        }
    }

    Function.prototype.myBind = myBind

}()

let obj = {
    name:'李若谷',   
}

function func(x,y){
    this.total = x + y;
    console.log(x);
    console.log(y);
    // return this
}

let res = func.myBind(obj,100,200)

console.log(res()); // res ==> {name:'alibaba',total:300}

//bind是不会立即执行，所以会预先处理，先绑定this，先传参等deng

function a(){
    
}

