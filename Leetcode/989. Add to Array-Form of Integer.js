let addToArrayForm = function (A, K) {
    let innerA = A.join(''); //变成字符串
    let result = Number(innerA) + K;  //字符串变数字
    let outA = result.toString().split('');  //数字变字符串变数组
    return outA
};
//精度不够
let addToArrayForm2 = function (A, K) {
    const resultArr = [];
    let prevLeft = 0; //进位
    let i = A.length -1;
    while(i>=0||k!=0||prevLeft>0){
        //三种情况，
        // 数组合起来的数字比数字K大，
        // 数字K比数组合起来的数字大，导致数组加完了，K还有剩余
        // 2者一样大，最后最高位相加却要进位，例如555 + 445 最后要进位 1000；
        //判断条件比较多，不太适合for循环，

        //获取A和K里面的当前数字
        const ADigit = i>=0?A[i]:0;
        const KDigit = K%10;

        //把结果的余数push进结果，要是进位，prevLeft+1
        const addResult = ADigit + KDigit + prevLeft;
        const resultDigit = addResult%10;
        resultArr.push(resultDigit);

        //判断是否进位
        prevLeft = addResult>resultDigit?1:0;

        //下一次循环准备
        K=Math.floor(K/10);
        i--
    }
    // for (let i = A.length - 1; i > -1; i--) {
    //     A[i] + k % 10
    // }
    return resultArr.reverse()
};
let A = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]
let K = 516;
console.log(addToArrayForm(A, K));