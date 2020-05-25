/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //到达（m,n）的方法数，等于它左(m-1,n) 和 上(m,n-1) 2个格子的方法数之和
    //而第一行，第一列的每一个格子，到达的方法数都是1
    //所以通过二维数组的加法算出

    //1.生成一个二维数组,注意：二位数组的个数n（或i者m），反正不是 m*n，因为是二维
    let memo = [];
    for(let i = 0;i<n;i++){
        memo.push([])
    }

    //2.初始化二维数组第一行，第一列的值为1
    //第一行的值为1
    for(let row = 0;row<m;row++){
        memo[0][row] = 1
        
    }

    //第一列的值为1
    for(let col = 0;col<n;col++){
        memo[col][0] = 1;
    }

    for(let x = 1;x<n;x++){
        for(let y = 1;y<m;y++){
            memo[x][y] = memo[x-1][y] + memo[x][y-1] 
        }
    }

    return memo[n-1][m-1]
};
// @lc code=end

