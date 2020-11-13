
class Node{
	constructor(){
		this.element = 'head';
		this.next = null
	}
}

class LinkedList{
	constructor(){
		this.head = new Node()
	}

	//查询找到指定节点
	find(itemCtn){
		let curNode = this.head;
		while( curNode.element != itemCtn){
			curNode = curNode.next
		}
		return curNode
	}
	
	//找到节点的上一个节点
	findPre(itemCtn){
		let curNode = this.head;
		while(curNode.next != null && curNode.next.element != itemCtn ){
			curNode = curNode.next
		}
		return curNode
	}

	//找到节点的下一个节点
	findNext(itemCtn){
		return this.find(itemCtn).next ? this.find(itemCtn).next : null
	}

	//插入新节点
	insert(oldItem,newItem){
		let $old = this.find(oldItem);
		let $oldNext = $old.next;
		$old.next = newItem;
		newItem.next = $oldNext;
	}

	//删除节点
	delete(itemCtn){
		let pre = this.findPre(itemCtn);
		pre.next = this.findNext(itemCtn)
	}
}

// var cities = new LList(); cities.insert("Conway", "head"); 
// cities.insert("Russellville", "Conway"); 
// cities.insert("Alma", "Russellville"); 
// cities.display()

let cities2 = new LinkedList(); 
cities2.insert("Bejing"); 
cities2.insert("shanghai"); 
cities2.insert("Changsha"); 
console.log(cities2)
// cities2.display()
