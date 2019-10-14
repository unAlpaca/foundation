//斐波那契数列
var climbStairs = function(n) {
    //数组前2项
    if (n<3) return n;

    //计算数组第3项之后
    let step_1 = 1;
    let step_2 = 2;
    for(var i = 2 ;i<n;i++){
        let temp = step_2;
        step_2 = step_1 + step_2;
        step_1 = temp;
    }
    return step_2
}