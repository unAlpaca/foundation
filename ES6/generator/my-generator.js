let obj = {
    a:2,
    b:3
}

Object.defineProperty(obj,Symbol.iterator,{
    enumerable:false,
    writable:false,
    configurable:true,
    value:function(){
        let o = this;
        let id = 0;
        let ks = Object.keys(o);
        return{
            next:function(){
                return {
                    value:o[ks[id++]],
                    done: (id>ks.length)
                }
            }
        }
    }
})


let it = obj[Symbol.iterator]();
console.log(it.next())
console.log(it.next());