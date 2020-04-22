/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //中心拓展法

    if(s.length<2) return s

    //就是在中心定一个初始位置，然后向2边扩散查找
    //存在s.length为偶数时，初始位置就不是一个值了
    //为单，i-1 , i , i+1，
    //为双就 i,i+1;

    //start 是起始劫取的位置
    //maxLength就是最大回文的长度
    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left,right){
        while(left>=0 && right < s.length && s[left] == s[right]){
            if(right - left + 1 > maxLength){
                maxLength = right - left + 1;
                start = left;
            }
            left--
            right++
        }
    }

    for(let i = 0;i<s.length;i++){
        expandAroundCenter(i,i+1) //s为偶数
        expandAroundCenter(i-1,i+1)
    }

    return s.substring(start,start+maxLength)
};
// @lc code=end

