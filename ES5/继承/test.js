function Animal(){

}

var dog = new Animal();

console.log(dog.constructor == Animal) //true  dog的构造器是Function Animal

console.log(dog.constructor == Animal.prototype) //false 

console.log(dog.__proto__ == Animal) //false //dog的原型不会找到Function Animal构造器

console.log(dog.__proto__ == Animal.prototype) //true dog的原型链追溯是 Function Animal 的原型对象

console.log(dog instanceof Animal) //true 

console.log(Animal.__proto__ == Animal.prototype) // false Function Animal不是没有在Function Animal的原型链上

console.log((Animal.__proto__ == Function.prototype) ) // true  Function Animal 在 Function的原型的原型链里

console.log(( Function.prototype.__proto__ == Object.prototype) ) // true  所有Function的原型 在 Object的原型链里

