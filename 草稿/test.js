function lengthOfLongestSubstring(str){
    //定义2个指针来找到字符串的左右边界。
    let left_pointer = 0;
    let right_pointer = 0;

    //定义最大长度
    let maxLength = 0;

    //定义一个临时储存的结果,用来判断指针是否移动
    let tempStr = [];


    for(;right_pointer<str.length;right_pointer++){
        
        if(tempStr.indexOf(str[right_pointer] != -1)){

            do{
                tempStr.shift();
                console.log(tempStr[0]);
                
                left_pointer++
            }while(tempStr.has(str[right_pointer]))
        console.log(tempStr.has([right_pointer]));


        }else{
            tempStr.add(str[right_pointer]);
            tempStr.size > maxLength && (maxLength = tempStr.size)
        }   
    }

    return maxLength

}

let arr = 'abcabcbb'
let arr1 = 'peeke'

 
 console.log(lengthOfLongestSubstring(arr1));
