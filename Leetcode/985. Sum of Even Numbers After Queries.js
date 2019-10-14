/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
let sumEvenAfterQueries = function(A, queries) {
    //新建一个B，数据与A同，不直接操作A
    let B=A.map((x)=>{return x});
    //储存每次操作完成后的结果
    let result = [];

    //循环相加，index要操作的下标，digit是对应下标的值
    let len = queries.length;
    for(let i = 0;i<len;i++){
        // console.log(A[i]);
        //计算 adding后的数组
        let index = queries[i][1];
        let digit = queries[i][0];
        B[index]=B[index]+digit;

        //找到数组中的偶数，计算结果，并推进result数组中
        let count = 0;
        for(let j=0;j<len;j++){
            if(B[j]%2 ===0){
                count+=B[j]
            }
        }
        result.push(count)
    }
    return result
};

let A=[1,2,3,4],queries = [[1,0],[-3,1],[-4,0],[2,3]];
console.log(sumEvenAfterQueries(A, queries));