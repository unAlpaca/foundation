import { arrMethods,observeArr } from './array';
import defineReactiveData from './defineReactiveData'

function Observer(data) {
  if (Array.isArray(data)) {
    // 监听arr,
    data.__proto__ = arrMethods

    //data本身还是arr
    observeArr(data)
    
  } else {
    this.walk(data);
  }
}

Observer.prototype.walk = function (data) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
      value = data[key];
    // console.log(key);
    // console.log(value);
    defineReactiveData(data,key,value)
  }
};

export default Observer;
//  {} defineprooerty
//  [] 自己哦弄
