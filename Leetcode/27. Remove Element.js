/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i =0;
    var len = nums.length;
    while (i<len){
        if (nums[i] == val){
            nums[i] = nums[len-1];
            len --;
        }else {
            i ++
        }
        // console.log(i,nums[i],len);
    }
    return len
};
var  nums = [0,1,2,2,3,0,4,2];
// removeElement(nums,2)
console.log(removeElement(nums,2));