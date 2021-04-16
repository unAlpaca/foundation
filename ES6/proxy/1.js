let a = {
    name:'a'
}

let p = new Proxy(a,function (){
    console.log(1);
})