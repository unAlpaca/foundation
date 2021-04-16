var a = 1
var c = 1
// var d

var b = new Promise((resolve => {
    console.log(1);
    var ret = resolve(Promise.resolve(8))
    console.log(ret);
})).then((res) => {
    console.log(res);
});


new Promise((resolve => {
    console.log(2);

    resolve()
})).then(res => {
    // console.log(d);
    console.log(4);
}).then(res=>{
    console.log(6);
})
