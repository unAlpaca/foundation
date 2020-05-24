/**
 * leetcode.88
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。


示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
*/


/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/
/* function ListNode(val) {
    *     this.val = val;
    *     this.next = null;
    * }
    * @param {ListNode} l1
    * @param {ListNode} l2
    * @return {ListNode}
    */

    /**leetcode 56
     * 
    */
   var merge = function(intervals) {

    if(intervals.length < 2) return intervals;

    intervals.sort((a,b)=>(a[0]-b[0]))
    console.log(intervals);
    
    
    //定义2个变量，第一个是curr一个是正再操作的变量，
    let curr = intervals[0];
    let result = [];

    for(interval of intervals){
        //如果当前的终止位置大于操作的起始位置，可以合并

        console.log(curr[1])
        console.log(interval[0])
        if(curr[1] >= interval[0]){
            //合并，取2者终止位置大的
            console.log('zzz')
            curr[1] = Math.max(curr[1],interval[1])
        }else{

            //小于就记录，重启第二个区间
            result.push(curr);
            curr = interval;
        }
    }
    //如果最后的毕竟没走result.pshu，则push
    if(curr.length !== 0 ){
        result.push(curr)
    }

    return result
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
