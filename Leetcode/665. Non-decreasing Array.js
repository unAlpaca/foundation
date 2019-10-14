/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    //count来记录发生不满足递增的下标元素
    var count = 0;
    //因为从0开始就是往后比，数组最后一个元素就只能和空比，
    // 从1开始就是往前比，这个没有特殊情况。
    for (var i = 1; i < nums.length; i++) {
        //判断是否出现异常的下标元素
        if (nums[i - 1] > nums[i]) {
            //此时出现了异常的下标元素，nums[i-1]
            count++;
            //如果此时count的数量大于1，则判定不符合题目要求（要求：只修改一个）
            if (count > 1) return false;

            //进行修改，通过nums[i-2]与nums[i]的大小比较，来判断：
            //  nums[i-2]<nums[i],则减小nums[i-1]
            //  nums[i-2]>nums[i],则增大nums[i]
            //以满足数列非递减的要求。
            const left = i > 1 ? nums[i - 2] : -Infinity;
            if (left > nums[i]) {
                nums[i] = nums[i - 1];
            } else {
                nums[i - 1] = left;
            }
        }
    }
    return true

};
checkPossibility([4, 2, 3])