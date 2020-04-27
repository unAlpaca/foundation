/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    //用来储存结果
    const res = [];

    //排序，遍历时，重复的元素则跳过，因为他需要unique，就相当是去重了
    nums.sort((a,b)=>(a-b))

    //遍历
    for(let i = 0; i<=nums.length-2;i++){

        //进行计算 的 判断条件：
        //1.它是第一个元素 
        //2.它相邻的元素不相等，因为排过序了，相等则遍历结果也相等，无法unique
        if(i===0 || nums[i] !== nums[i-1]){

            //相加的2个数由外向内缩小范围
            let start = i + 1;
            let end = nums.length - 1;

            while(start < end){
                //等于0 是我们要找的结果
                if(nums[i] + nums[start] + nums[end] === 0){

                    //保存结果
                    res.push([nums[i],nums[start],nums[end]])
                    //缩小范围，继续寻找
                    start++;
                    end--;

                    //这里再次判断相邻是否相等,相等则跳过
                    while(start<end && nums[start] === nums[start-1]){
                        start++
                    }
                    while(start<end && nums[end] === nums[end+1]){
                        end--
                    }

                    //如果小于0,说明start值不够，因为排过序的end值是最大的，只能调整start，减小end只能更小
                }else if((nums[i] + nums[start] + nums[end] < 0)){
                    start++

                     //如果大于0,说明end值太大了，因为排过序的end值是最大的，只能调整end值减小来适应，增加start只会更大
                }else{
                    end--
                }
            }
        }
    }

    return res
};
// @lc code=end

