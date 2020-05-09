/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let mapStander = new Map();
    mapStander.set("(",")")
    mapStander.set("[","]")
    mapStander.set("{","}")

    let mapStack = []

    for(let i =0;i<s.length;i++){
        if(mapStander.has(s[i])){
            mapStack.push(mapStander.get(s[i]))
        }else{
            if(mapStack.pop() != s[i] ) return false
        }
    }

    if(mapStack.length !=0) return false

    return true
};
// @lc code=end

