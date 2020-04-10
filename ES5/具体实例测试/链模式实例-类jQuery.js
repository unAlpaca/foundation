//jQuery的点链接语法，基于JS的原型链,
//每一个方法的实现都返回了当前对象的this


var A = function(){

}

A.prototype = {
	length:2,
	size:function(){
		return this.length
	}
}

//但是以A.size() 或者 A().size()都调用不了这个原型上的函数，
//1是不存在于私有属性，2是返回值是undefined自然也调用不了
//===> 结论：需要找另一个对象来帮忙，在A里 return一个对象
// 又减少变量的创建，直接使用A的一个属性对象即可
var A = function(){
	return A.fn
}

A.fn = A.prototype = {
	length:2,
	size:function(){
		return this.length
	}
}

//$()返回的是一个元素的集合元蔟，而现在返回的其实是一个A.fn，补上一个方法即可

var A = function(selecter){
	return A.fn.init(selecter)
}

A.fn = A.prototype = {
	init:function(selecter){
		return document.getElementById(selecter)
	},
	length:2,
	size:function(){
		return this.length
	}
}

