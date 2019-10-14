/**
 * Implement int sqrt(int x).

 Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

 Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

 Example 1:

 Input: 4
 Output: 2
 Example 2:

 Input: 8
 Output: 2
 Explanation: The square root of 8 is 2.82842..., and since
 the decimal part is truncated, 2 is returned.*/
/**
 * @param {number} x
 * @return {number}
 */
    //最小2分法
var mySqrt = function (x) {
        //提交报错，因为没考虑0，给0加上定义
        // if(x == 0) return 0 这样提交又会提示input 1 output undefined
        //由于以上2点，我发现0和1代入时，我定义的start 和 end是相等的，所以x=0,x=1无法进入while循环，把循环条件更改：while (start < end) ==> while (start <= end)


        //查找数字的开头start,查找数字的结尾end。自己建立的检测索引mid,同时也是中间值
        let start = 0;
        let end = x;
        let mid = 0;
        while (start <= end) {
            //给中间值定值，最小2分法嘛，就折中比较。
            mid = Math.floor((start + end) / 2);
            console.log(mid);

            //对中间数mid进行判断，如果mid*mid<=x<(mid+1)*(mid+1)则符合条件
            if (Math.pow(mid, 2) <= x && x < Math.pow(mid + 1, 2)) {
                console.log(mid);
                return mid
                //否则就对应的修改2分发的左边界限或者右边界限
            } else if (Math.pow(mid, 2) < x) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    };
console.log(mySqrt(8));