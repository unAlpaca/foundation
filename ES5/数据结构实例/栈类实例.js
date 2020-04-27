// 栈类实现实例
class Stack {
	constructor(){
		this.dataStore = [];
		this.top = 0;
	}
	push(element){
		this.dataStore.push[this.top++] = element
	}
	pop(){
		return this.dataStore[--this.top]
	}
	clear(){
		this.top = 0;
	}
	length(){
		return this.top
	}
}