/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
let strWithout3a3b = function (A, B) {
    let len = A + B, a = 'a', b = 'b';
    let resultArr = [];
    let result = '';
    let xunhuan = true;

    while (xunhuan) {
        //通过2个while构造数组，转成字符串的准备工作
        while (A > 0) {
            resultArr.splice(Math.floor(Math.random() * len), 0, a);
            A--;
        }
        while (B > 0) {
            resultArr.splice(Math.floor(Math.random() * len), 0, b);
            B--;
        }
        //数组转成字符串
        result = resultArr.join("");
        console.log(result);

        //对字符串进行正则判断
        if (result.indexOf('aaa') === -1 && result.indexOf('bbb') === -1) {
            xunhuan = !xunhuan;
            return result
        }
    }
}//数字小可以用
let Strwithout3a3b = function (A, B) {
    let result = "";

    //无论 "ab" 还是 "ba"拼接，是绝对安全的,下面用安全数对称呼
    //通过A,B的大小选择拼接的方式
    let set = (A >= B) ? "ab" : "ba";

    //dif是A，B的差值，
    //代表了安全数对用完后，剩下了dif个单个'a'或者单个'b'
    let dif = Math.abs(A - B);

    //min是代表了最后剩的到底是dif个'a'还是dif个'b'
    let min = (A >= B) ? B : A;

    //开始拼接，说不清，体会，与上面是一一对应的，目的是合理的插入字符串中
    for (let i = 0; i < min; i++) {
        if (dif > 0) {
            result += (A >= B) ? 'a' : 'b';
            dif--;
        }
        result += set;
    }
    if (dif > 0) {
        for (let j = 0; j < dif; j++) {
            result += (A >= B) ? 'a' : 'b';
        }
    }
    return result;
}

console.log(Strwithout3a3b(4, 1));