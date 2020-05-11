/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0 ) return [];

    //定义一个26位的key,对应英文的26个字母，哪个字母出现就加一，同一类型的Anagrams具有相同的26位字母key，


    //5.定义一个map来收集结果
    let map = new Map()

    //1.遍历strs里的每一个元素，统计ascii key
    for(let str of strs){
        //通过ASCII码来统计对应的字母key,
        //2.创建一个初始的ASCIIkey,26个0的数组
        let ascii = new Array(26).fill(0);

        //3.计算当前字符的ascii，a 是97
        for(let i = 0;i<str.length;i++){
            let index = str.charCodeAt(i) - 97;
            ascii[index]++
        }

        //4.将当前元素的  数组形式的ascii key=> 变成 字符串
        ascii = ascii.join('');

        //6.如果key存在，添加新值
        if(map.has(ascii)){
            map.set(ascii,[...map.get(ascii),str])
        }else{
            //7.没有则创建新值
            map.set(ascii,[str])
        }
    }

    //8.最后把map统计的值遍历出去就是结果
    let rusult = [];
    for(let arr of map){
        rusult.push(arr[1])
    }

    return rusult
    
};
// @lc code=end

