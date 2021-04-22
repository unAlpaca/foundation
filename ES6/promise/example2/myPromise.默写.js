function myPromise(fn){
    let s = 'pending';
    let callback_r_arr = []
    let callback_j_arr = []

    function r(){
        s = 'resolve';
        handleCallBack.apply(undefined,arguments)
    }
    function j(){
        s = 'reject';
        handleCallBack.apply(undefined,arguments)
    }
    function handleCallBack(test){
        console.log(test,'测试argument');
        if(s == 'resolve'){
            for(let i in callback_r_arr){
                if(callback_r_arr[i] != undefined){
                    callback_r_arr[i].apply(undefined,arguments)
                    console.log(arguments.callee);
                    console.log(arguments);
                }
            }
        }

        if(s == 'reject'){
            for(let j in callback_j_arr){
                if(callback_j_arr[j] != undefined){
                    callback_j_arr[j].apply(undefined,arguments)
                }
            }
        }
    }
    fn.call(undefined,r,j)

    return {
        then:function (callback_r,callback_j){
            callback_r_arr.push(callback_r)
            callback_j_arr.push(callback_j)
            return this
        },
        catch:function (callback_j){
            callback_j_arr.push(callback_j)
            return this
        }
    }
}

// var p = new Promise(function (resolve,reject){
//
// })
var p = new myPromise(function(successResolve,errReject){
	setTimeout(function(){
		console.log(1)
		successResolve('zzz')
	},1000)
});

p.then(function(){
	console.log('成功')
}).then(function(res){
    console.log(2)
}).then(function (){
    console.log(3);
}).catch(function (err){
    console.log(err);
    console.log(4);
})


