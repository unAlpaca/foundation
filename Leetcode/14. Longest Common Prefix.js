/**
 * Write a function to find the longest common prefix string amongst an array of strings.

 If there is no common prefix(字首), return an empty string "".

 Example 1:

 Input: ["flower","flow","flight"]
 Output: "fl"
 Example 2:

 Input: ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.
 Note:

 All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs array
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var result = [];
    var jiequshuzi;
    //将每一个元素从首字母开始遍历后的结果拼接
    strs.reduce(function (pre, cur) {
        // console.log(cur);
        for (var i in cur) {
            if (pre[i] == cur[i]) {
                result.push(pre[i])
            } else {
                break
            }
        }
        // console.log(result);
        return result
    });

    //最后一个首字母的下标之后的值，就是结果
    result = result.join('');
    console.log(result);

    //获取最后一个首字母的下标
    jiequshuzi = result.lastIndexOf(result[0]);

    //查看结果
    console.log(result.substring(jiequshuzi));
    return result.substring(jiequshuzi)
};
var longestCommonPrefix2 = function (strs) {
    if (strs.length == 0) return "";
    var prefix = strs[0];
    for (var i = 1; i<strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length == 0) return "";
        }
    }
    console.log(prefix);
    return prefix
};

var ary = ["flower", "flow", "flight", "fluw"];
var ary1 = ["teacher", "tea", "tektic", "tecnology"];
var ary2 = ["dog", "racecer", "car"];
longestCommonPrefix2(ary)    //fl
longestCommonPrefix2(ary1)   //te
longestCommonPrefix2(ary2)   //