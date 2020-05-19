/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    //空数组返回

    if(!matrix.length) return []
    
    //定义左上角第一个值的4个方向和对应方向的边界
    /*
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12] 
    */
    let left = 0;
    let right = matrix[0].length -1 
    let top = 0;
    let bottom = matrix.length - 1 ;
    let direction = 'right'; //初始方向向右
    let result = [];

    //开始循环，4个方向
    while(left <= right && top <= bottom){
        if(direction == 'right'){
            for(let i = left;i<=right;i++){
                result.push(matrix[top][i]); //将top这一排全加进去
            }
            //top这一排全加完，+1下次就遍历下一排了，且此时的方向向下
            top++; 
            direction = 'down'
        }else if( direction == 'down'){
            //此时是最右排竖排
            for(let i = top;i<=bottom;i++){
                result.push(matrix[i][right])
            }
            //遍历完则right-1列,方向变左
            right--;
            direction = 'left'
        }else if(direction == 'left'){
            for(let i = right;i>=left;i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = 'top'
        }else if(direction == 'top'){
            for(let i = bottom;i>=top;i--){
                result.push(matrix[i][left])
            }
            left++;
            direction = 'right'
        }
    }
    //所有循环结束返回结果
    return result
};
// @lc code=end

