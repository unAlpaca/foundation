function play(name){
    console.log(`我要玩${name}`);
}

function baogu(fn,...argArr){
    console.log(argArr);
    fn.apply(undefined,argArr)
}

baogu(play,'王者')

