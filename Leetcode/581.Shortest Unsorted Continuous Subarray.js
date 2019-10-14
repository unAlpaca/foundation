/**
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

 You need to find the shortest such subarray and output its length.

 Example 1:
 Input: [2, 6, 4, 8, 10, 9, 15]
 Output: 5
 Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    var len = nums.length;
    var left = nums.length;
    var right = 0;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (nums[j] < nums[i]) {
                //当出现需要改变的数组元素时，记录下标，
                left = Math.min(i, left);
                right = Math.max(j, right);
            }
        }
    }
    //以下这个3目运算符是过滤掉不需要排序的数组
    return right - left + 1 < 0 ? 0 : right - left + 1
};
var arr = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(arr));