

import observe from './observe'

var ARR_METHEOS = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];

var originArrMethods = Array.prototype,
  arrMethods = Object.create(originArrMethods);

ARR_METHEOS.map(function (m) {
  arrMethods[m] = function () {
    var args = Array.prototype.slice.call(arguments),
      rt = originArrMethods[m].apply(this, args);

    var newArr;

    switch (m) {
      case "push":
      case "unshift":
        newArr = args;
        break
      case "splice":
        newArr = args.slice(2);
        break;
      default:
        break;

    }

    newArr && observeArr(newArr)
    return rt

  };
});


function observeArr(arr){
    for(var i =0;i<arr.length;i++){
        observe(arr[i])
    }
}

export {
    arrMethods,
    observeArr
}
