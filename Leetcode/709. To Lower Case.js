/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    const DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    let strArr = str.split('');
    let resultArr = [];
    strArr.forEach((item) => {
        item = (item >= 'A' && item <= 'Z') ? String.fromCharCode(item.charCodeAt(0) + DIFF) : item;
        resultArr.push(item)
    });
    return resultArr.join('')
};

console.log(toLowerCase('ABCD'));