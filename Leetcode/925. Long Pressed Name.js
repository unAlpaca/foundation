/**
 * Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

 You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.



 Example 1:

 Input: name = "alex", typed = "aaleex"
 Output: true
 Explanation: 'a' and 'e' in 'alex' were long pressed.
 Example 2:

 Input: name = "saeed", typed = "ssaaedd"
 Output: false
 Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
 Example 3:

 Input: name = "leelee", typed = "lleeelee"
 Output: true
 Example 4:

 Input: name = "laiden", typed = "laiden"
 Output: true
 Explanation: It's not necessary to long press any character.*/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// var isLongPressedName = function(name, typed) {
//     let typedArr = typed.split("");
//     let typeARR = new Set(typedArr);
//     typeARR = Array.from(typeARR);
//     typeARR = typeARR.join("");
//     if(typeARR == name){
//         return true
//     }else {
//         return false
//     }
// };
var isLongPressedName2 = function(name, typed) {

    function quchong(parama) {
        let arr = parama.split('');
        for(let i=0;i<arr.length;i++){
            if(arr[i] == arr[i+1]){
                arr.splice(i,1);
            }
        }
        return arr
    }

    let nameArr = (quchong(name)).join("");
    let typedArr = (quchong(typed)).join("");
    console.log(nameArr == typedArr);
    console.log(typedArr);
};
var isLongPressedName3 = function(name, typed) {
    function finddif(paramaStr) {
        let recore = [];
        let paramaArr = paramaStr.split("");
        for(let i =1;i<paramaStr.length;i++){
            if(paramaArr[i] != paramaArr[i-1]){
                recore.push(i)
            }
        }
        return recore
    }

    console.log(finddif(name));
};
var isLongPressedName4 = function(name, typed) {
    //循环遍历对比name和typed的每一位，
    for(let i =0,j=0;j<typed.length;j++){
        //相同就最好了，继续对比下一位
        if(i<name.length&&name[i]==typed[j]){
            i++;
            //不同，就与上一位对比，与上一位相同，就是多写了，继续
        }else if(typed[j] == typed[j-1]&& j>0){
            continue

            //与上一位不同，就不属于多写，就类似于name:leelee,tped:lelee
        }else {
            return false
        }
    }

    //最后汇总对比
    if(i==name.length){
        return true
    }else {
        return false
    }
};





var name = "aaaakk", typed = "ssaaedd";
console.log(isLongPressedName3(name, typed));
