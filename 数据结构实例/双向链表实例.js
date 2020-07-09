function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display

    function find(item) {
        var curNode = this.head;
        while (curNode.element != item) {
            curNode = curNode.next;
        }
        return curNode
    }

    function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    function remove(item) { 
    	var currNode = this.find(item); 
    	if (!(currNode.next == null)) { 
    		currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null; 
        } 
    }
}