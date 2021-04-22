// let promise = new Promise((resolve, reject) => {
//   reject("Error");
// });

// promise.then((value)=>{
//     console.log('FullFilled: ' + value);
// },(reason)=>{
//     console.log('Rejected: ' + reason);
// })

let promise1 = new Promise((resolve, reject) => {
  resolve("promise1");
});

let promise2 = promise1
  .then((value) => {
    // return value + " ->then ->";
    return Promise.resolve(value + " ->then ->")
  })
  .then((value) => {
    console.log(value);
  });
