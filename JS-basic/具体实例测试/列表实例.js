// 列表实现
class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    append(element){
    	this.dataStore[this.listSize++] = element;
    }
    find(element){
    	// console.log(this.dataStore.indexOf(element))
    	return this.dataStore.indexOf(element)>-1 ? this.dataStore.indexOf(element):-1
    }
    delete(element){
    	let index = this.find(element);
    	if(index>-1){
    		this.dataStore.splice(index,1);
    		this.listSize --
    	}
    }
    insert(element,num){
    	this.dataStore.splice(num--,0,element);
    	this.listSize ++
    }
    clear(){
    	this.dataStore = [];
    	this.listSize = this.pos = 0;
    }
    has(element){
    	if(this.dataStore.indexOf(element)>-1){
    		console.log('EXIST' + element);
    		return true
    	}else{
    		return false
    	}
    }

    //列表移动
    tofront(){
    	this.pos = 0;
    }
    toend(){
    	this.pos = this.listSize - 1;
    }
    pre(){
    	if(this.pos>0){
    		this.pos --
    	}
    	console.log(this.pos)
    }
    next(){
    	if(this.pos< this.listSize - 1){
    		this.pos ++
    	}
    	console.log(this.pos)
    }
    cur(){
    	console.log(this.pos)
    	return this.pos
    }
    moveTo(num){
    	this.pos = num
    	console.log('moveTo' + num)
    }
    getElement(){
    	console.log(this.dataStore[this.pos])
    	return this.dataStore[this.pos]
    }
}

let A = new List();
A.append('子元素1');
A.append('子元素2');
A.append('子元素3');
A.append('子元素4');
A.append('子元素5');
A.append('子元素6');
A.append('子元素7');
A.append('子元素8');

// console.log(A);

A.find('子元素1');
// console.log(A);

A.insert('子元素2',1);
// console.log(A);

// A.delete('子元素1')
// console.log(A);

// A.clear();
// console.log(A)

A.has('子元素1');

A.getElement(1);
A.cur();
A.next()
