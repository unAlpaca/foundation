
const arrayProto = Array.prototype;
console.log(arrayProto);
const arrayMethods = Object.create(arrayProto);
console.log(JSON.parse(arrayMethods));
['push','pop','shift','unshift','splice','sort','reverse'].forEach((method)=>{
	//缓存原有方法
	const original = arrayProto[method];
	Object.defineProperty(arrayMethods,method,{
		value:function mutator(...args){
			console.log(1111)
			return original.apply(this,args)
		},
		enumerarble:false,
		writable:true,
		configurable:true
	})
});

['1','2'].__proto__ = arrayMethods
console.log(['1','2']._)