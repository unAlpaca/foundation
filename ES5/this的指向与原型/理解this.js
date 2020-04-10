function foo(num){
    console.log("foo:" + num);

    this.count =;
    console.log(this,'1')
}

foo.cout = 0;

for(let i =0;i<1;i++){
    foo(i)
}

console.log(foo.cout)
console.log(global.count,'2')

//以上结果foo.cout还是0，因为this在foo函数内部使用时指向的是global，但是没有count这个属性，也不会没有就创建，所以一直undefined,

let a = new foo();
let b = new foo();
console.log(a.count)
console.log(b.count)