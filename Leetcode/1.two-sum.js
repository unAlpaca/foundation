/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapArr = new Map();
    for(let i = 0;i<nums.length;i++){
        let subtruct = target - nums[i];
        if(mapArr.has(subtruct)){
            return [mapArr.get(subtruct),i]
        }else{
            mapArr.set(nums[i],i)
        }
    }
};
// @lc code=end

