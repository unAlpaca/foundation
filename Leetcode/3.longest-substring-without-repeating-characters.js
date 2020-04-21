/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //定义2个指针来找到字符串的左右边界。
    let i = 0;
    let j = 0;

    //定义最大长度
    let maxLength = 0;

    //定义一个临时储存的结果,用来判断指针是否移动
    let tempSet = new Set();

    if(s.length==0) return 0

    for(i;i<s.length;i++){
        if(tempSet.has(s[i])){
            while(tempSet.has(s[i])){
                tempSet.delete(s[j++]);
            }
            tempSet.add(s[i])
    
        }else{
            tempSet.add(s[i]);
            maxLength = Math.max(maxLength,tempSet.size)
            // tempSet.size > maxLength && (maxLength = tempSet.size)
        }
    }

    return maxLength
};
// @lc code=end

