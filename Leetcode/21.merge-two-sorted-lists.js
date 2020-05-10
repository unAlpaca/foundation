/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //l1，l2是已经排过序的链表
var mergeTwoLists = function(l1, l2) {

    //生成一个新的链表来接受结果
    let mergList = new Listnode();

    //因为mergList目前是个null，他会新增后面的子链，所以需要这个temp来将指针定在头部
    let temp = mergList;

    //开始比较2个目标链表，l1,l2
    while(l1 !=null && l2 != null){

        //l1当前的值比较小
        if(l1.val < l2.val){
            mergList.next = l1.val; //，mergList新增子链元素
            l1 = l1.next  //l1自增
        }else{
            mergList.next = l2.val; //，mergList新增子链元素
            l2 = l2.next //l2自增
        }

        mergList = mergList.next //mergList 自增
    }
    
    //有一个目标链表比完后有剩余，则直接增加到merList后面，因为：题目给的链表是已经拍过序的
    //说明l2有剩余
    if(l1 == null){
        mergList.next = l2
    }

    if(l2 == null){
        mergList.next = l1
    }

    //返回是next,因为temp的第一个元素是Null,l1和l2的值都接在null的next后面
    return temp.next
};
// @lc code=end

