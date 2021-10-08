/**
 *  提取 object 某些属性到一个对象
 *  var obj = {
		a: 1,
		b: 2,
		c: 3,
		d: 4
	};
 * extract(obj, 'c', 'b')
 * return { c: 3, b: 2 }
 */
class Extract {
  static extract(obj) {
    const o = {};
    const attr = Array.prototype.slice.call(arguments).slice(1);
    attr.forEach((val) => {
      if (val in obj) {
        o[val] = obj[val];
      }
    });
    return o;
  }
  static extract_Es6(...arg) {
    const [obj,keysList] = arg;
    const o = Object.create({});
    for(let key of keysList){
      obj.hasOwnProperty(key) && (o[key] = obj[key])
    }
    return o;
  }
}

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
let t = Extract.extract(obj, "c", "b");
// console.log(t);

let t2 = Extract.extract_Es6(obj,["c","b"])
console.log(t2);
