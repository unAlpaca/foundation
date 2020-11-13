class Queue {
	controctor(){
		this.dataStore = [];
	}

	//enqueue 在队尾添加一个元素
	enqueue(item){
		this.dataStore.push(item)
	}

	//dequeque 删除队首元素
	dequeque(){
		this.dataStore.shift()
	}

	//读取队首 和 队尾
	front(){
		return this.dataStore[0]
	}
	
	back(){
		return this.dataStore[this.dataStore.length - 1];
	}

	//判断是否队列为空
	isEmpty(){
		return this.dataStore.length ? true : false
	}
}
