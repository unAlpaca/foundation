/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if(intervals.length < 2) return intervals;

    intervals.sort((a,b)=>(a[0]-b[0]))
    
    //定义2个变量，第一个是curr一个是正再操作的变量，
    let curr = intervals[0];
    let result = [];

    for(interval of intervals){
        //如果当前的终止位置大于操作的起始位置，可以合并
        if(curr[1] >= interval[0]){
            //合并，取2者终止位置大的
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
// @lc code=end

