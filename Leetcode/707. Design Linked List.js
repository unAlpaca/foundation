/**
 * Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

 Implement these functions in your linked list class:

 get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 addAtTail(val) : Append a node of value val to the last element of the linked list.
 addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.

 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该有两个属性:val和next。val是当前节点的值，next是指向下一个节点的指针/引用。如果要使用双链表，还需要一个属性prev来指示链表中的前一个节点。假设链表中的所有节点都是0索引的。


 在链表类中实现这些函数:
 get(index):获取链表中第一个索引节点的值。如果索引无效，则返回-1。
 addAtHead(val):在链表的第一个元素之前添加一个值为val的节点。插入之后，新节点将是链表的第一个节点。
 addAtTail(val):向链表的最后一个元素追加一个值为val的节点。
 addAtIndex(index, val):在链表的第一个索引节点之前添加一个值为val的节点。如果index等于链表的长度，节点将被追加到链表的末尾。如果索引大于长度，则不插入节点。
 deleteAtIndex(index):如果索引有效，则删除链表中的第一个索引节点。

 Example:

 MyLinkedList linkedList = new MyLinkedList();
 linkedList.addAtHead(1);
 linkedList.addAtTail(3);
 linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
 linkedList.get(1);            // returns 2
 linkedList.deleteAtIndex(1);  // now the linked list is 1->3
 linkedList.get(1);            // returns 3
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function(val) {
    this.head = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size ) {
        return -1;
    }

    let cur = this.head;
    for (let i=0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let cur = this.head;
    this.head = new Node(val);
    this.head.next = cur;
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let cur = this.head;
    while (cur.next) {
        cur = cur.next;
    }

    let newNode = new Node(val);

    if (!cur) {
        this.head = newNode
    } else {
        cur.next = newNode
    }
    this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0) {
        return;
    }

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let cur = this.head;
    for (let i=0; i < index -1; i++) {
        cur = cur.next;
    }

    if (!cur) {
        return;
    }

    let next = cur.next;
    cur.next = new Node(val);
    cur.next.next = next;
    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }

    this.size--;

    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i=0; i < index-1; i++) {
        cur = cur.next;
    }

    cur.next = cur.next.next;
};
