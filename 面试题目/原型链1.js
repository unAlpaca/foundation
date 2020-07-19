function Dog(name){
    this.name = name;
}

Dog.prototype.bark = function(){
    console.log('wangwang');
}

Dog.prototype.sayName = function(){
    console.log('myName' + this.name);
}

function _new(parentClass,...args ){
    //书写自己的代码

    //1.创建实例
    // let obj = {};
    // obj.__proto__ = parentClass.prototype;
    let obj = Object.create(parentClass.prototype)

    //2.执行方法，创建实例
    let res = parentClass.call(obj,...args);

    //3.分析这个res，根据结果是否为引用类型，返回,res是对象返回res，不然返回Obj
    if(res !== null && /^(object|function)$/.test(typeof res)) return res;
    return obj

} 


let sanmao = _new(Dog,'三毛');

sanmao.bark(); //'wangwang
sanmao.sayName()  //'myName 三毛'
console.log(sanmao instanceof Dog); //true

