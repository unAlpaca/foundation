/**
 * Given two non-negative integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.

 Return a list of all powerful integers that have value less than or equal to bound.

 You may return the answer in any order.  In your answer, each value should occur at most once.



 Example 1:

 Input: x = 2, y = 3, bound = 10
 Output: [2,3,4,5,7,9,10]
 Explanation:
 2 = 2^0 + 3^0
 3 = 2^1 + 3^0
 4 = 2^0 + 3^1
 5 = 2^1 + 3^1
 7 = 2^2 + 3^1
 9 = 2^3 + 3^0
 10 = 2^0 + 3^2
 Example 2:

 Input: x = 3, y = 5, bound = 15
 Output: [2,4,6,8,10,14]*/
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
// let powerfulIntegers = function(x, y, bound) {
//     let forNow = 0;
//     let resultArr= [];
//     for(let i =0;i<bound;i++){
//         for(let j = 0;forNow<bound;j++){
//             console.log('x =' + i);
//             console.log('y =' + j);
//
//             forNow=Math.pow(x,i) + Math.pow(y,j);
//             resultArr.push(forNow);
//         }
//     };
//     return resultArr
// };
function powerfulIntegers(x, y, bound) {
    const set = new Set();

    for (let valX = 1; valX < bound; valX *= x) {
        for (let valY = 1; valX + valY <= bound; valY *= y) {
            set.add(valX + valY);

            if (y === 1) {
                break;
            }
        }

        if (x === 1) {
            break;
        }
    }

    return Array.from(set);
}
console.log(powerfulIntegers(2, 3, 10));