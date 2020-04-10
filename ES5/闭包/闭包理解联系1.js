for (var i = 0; i < 6; i++) {
    setTimeout(function timerrr() {
        console.log('i :' + i);
    }, i * 1000)
}



for (var i2 = 0; i2 < 6; i2++) {
    (function() {
        setTimeout(function timerrr() {
            console.log('i2 :' + i);
        }, i2 * 1000)
    })()
    /**与上面一样，原因是，只是产生了单独的块级作用域，而没有进行实质星的操作，
     * 这个IIFE是一个什么都没有的空的作用域
     * 修改如下*/
}


for (var i3 = 0; i3 < 6; i3++) {
    (function(j) {
        setTimeout(function timerrr() {
            console.log('i3 :' + j);
        }, j * 1000)
    })(i3)
}