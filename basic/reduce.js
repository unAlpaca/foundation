var a = [1,2,3,4];
var b = [1]
var c = a.reduce((pre,cur,index,arr)=>{
    
    let sum = pre + cur;
    b.push(sum)
    return sum
    
})

console.log(c);
