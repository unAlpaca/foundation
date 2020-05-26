let a = 'xxx1'

function f1() {
    console.log(this);
    console.log(this.a);
}
var obj = {
    a: "xxx2",
    m2:function(fn){
        fn && fn.call()
        return function() {
            return fn;
        }
    }
}
console.log(obj.m2(f1)());
f1()