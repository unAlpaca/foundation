function A(){
	this.name = 'A';
}

let a = new A();
console.log(a.__proto__ == A.prototype);
console.log(A.__proto__ == Function.prototype);
console.log(A.prototype.__proto__ == Object.prototype);

let B = {
	name:'b'
}
A.prototype = B;
console.log(a.name)
console.log(a.__proto__ == A.prototype);

let c = new A();
console.log(c.__proto__ == B);
console.log(c.constructor);