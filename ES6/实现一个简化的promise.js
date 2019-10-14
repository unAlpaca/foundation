
// var promise = new Promise(function(x, y) {
//     setTimeout(() => {
//         x(101)
//     }, 3000)
// })

// promise.then((z) => {
//     console.log(z) // 101
// })

// /**注意到几个点：
// 	1.传入的是一个函数 ==> promise的参数类型为function
// 	2.返回后还可以调用then方法  ==> 返回了一个对象，then作为对象的方法调用
// 	3.我们要执行传进来的函数*/

// function myPromise(fn) {
//     fn.call(undefined, successResolve, errReject);

//     return {
//         then: function(successCallback, errCallback) {

//             return undefined
//         }
//     }
// }

// //promise的resolve,reject方法其实也是函数，
// //所以要在自己的Mypromise内部定义
// function myPromise(fn) {

//     function successResolve() {

//     }

//     function errReject() {

//     }

//     fn.call(undefined, successResolve, errReject);

//     return {
//         then: function(successCallback, errCallback) {

//             return undefined
//         }
//     }
// }

// //promise的精髓在于用状态来控制处理函数，所以需要添加一个状态变量

// function myPromise(fn) {

//     let status = 'pending'; //状态变量

//     function successResolve() {

//         status = 'resolved'
//     }

//     function errReject() {

//         status = 'rejected'
//     }


//     //执行传入的函数
//     fn.call(undefined, successResolve, errReject);


//     //返回一个对象，用于链式调用then
//     return {
//         then: function(successCallback, errCallback) {

//             return undefined
//         }
//     }
// }

// //现在再来写then里面的2个回调，
// //需要注意的是：这2个回调都是在，状态函数变化之后，对应执行相应的回调，所以
// //successCallback，errCallback的调用需要写在successResolve，errReject里面
// //故： 用两个单独的队列放传进来的函数

// function myPromise(fn) {

//     let status = 'pending'; //状态变量

//     let successArr = []; //成功的回调队列

//     let errArr = []; // 失败的回调队列

//     function successResolve() {

//         status = 'resolved';

//         handleThen.apply(undefined, arguments)


//     }

//     function errReject() {

//         status = 'rejected';

//         handleThen.apply(undefined, arguments)
//     }

//     function handleThen() {

//         if (status == 'resolved') {
//             for (let i = 0; i < successArr.length; i++) {
//                 successArr[i].apply(undefined, arguments)
//             }
//         } else if (status == 'rejected') {
//             for (let i = 0; i < errArr.length; i++) {
//                 errArr[i].apply(undefined, arguments)
//             }
//         }
//     }


//     //执行传入的函数
//     fn.call(undefined, successResolve, errReject);


//     //返回一个对象，用于链式调用then
//     return {
//         then: function(successCallback, errCallback) {

//             //回调队列的内容
//             successArr.push(successCallback);
//             errArr.push(errCallback);

//             return undefined
//         }
//     }
// }

//为了确保回调是异步执行的，用setTimeout裹一层,promise本身也是异步调用：

function myPromise(fn) {

    let status = 'pending'; //状态变量

    let successArr = []; //成功的回调队列

    let errArr = []; // 失败的回调队列

    function successResolve() {

        status = 'resolved';

        handleThen.apply(undefined, arguments)


    }

    function errReject() {

        status = 'rejected';

        handleThen.apply(undefined, arguments)
    }

    function handleThen() {
        setTimeout(() => {
            if (status == 'resolved') {
                for (let i = 0; i < successArr.length; i++) {
                    successArr[i].apply(undefined, arguments)
                }
            } else if (status == 'rejected') {
                for (let i = 0; i < errArr.length; i++) {
                    errArr[i].apply(undefined, arguments)
                }
            }
        })
    }


    //执行传入的函数
    fn.call(undefined, successResolve, errReject);


    //返回一个对象，用于链式调用then
    return {
        then: function(successCallback, errCallback) {

            //回调队列的内容
            successArr.push(successCallback);
            errArr.push(errCallback);

            return this
        }
    }
}

var p = new myPromise(function(successResolve,errReject){
	setTimeout(function(){
		console.log(1)
		successResolve()
	},1000)
});

p.then(function(){
	console.log('成功')
}).then(function(){
    console.log(1)
})