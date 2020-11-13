let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // let ran = Math.random();
        let ran = 0.2;
        console.log(ran);
        ran < 0.5? reject(ran) : resolve(ran)
    },1000)
})

p1.then(result =>{
    console.log('succeed' + result);
})

p1.catch((err)=>{
    console.log('err' + err);
})

// p1.finally(x =>{
//     console.log(x);
// })