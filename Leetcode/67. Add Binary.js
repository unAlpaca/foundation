/***
 * Given two binary strings, return their sum (also a binary string).

 The input strings are both non-empty and contains only characters 1 or 0.

 Example 1:

 Input: a = "11", b = "1"
 Output: "100"
 Example 2:

 Input: a = "1010", b = "1011"
 Output: "10101"
 */
/
const addBinary = (a, b) => {
    let res = ''; //结果，或者每次计算的余数，1或者0
    let letleftover = 0;//是否进位
    let i = a.length - 1; //第一个字符串长度
    let j = b.length - 1; //第一个字符串长度
    while (i >= 0 || j >= 0) {

        let sum = leftover;

        //把第一个2进制字符串的最后一位计算。记入sum。然后把数组i的下标定位到倒数第二位
        if (i >= 0) { sum += parseInt(a[i--]); }

        //把第二个2进制字符串的最后一位计算。与sum合计。然后把数组j的下标定位到倒数第二位
        if (j >= 0) { sum += parseInt(b[j--]); }

        //sum是否进位，若进位，leftover = 1，res = 0,若不进位，leftover = 0，res =1
        res = (sum % 2) + res;
        leftover = sum / 2 | 0;
    }

    //根据进位的实际情况讲结果进行拼接
    if (leftover > 0) { res = leftover + res; }
    return res;
};