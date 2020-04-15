function diff(obj1, obj2) {
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;

    if (!o1 || !o2) return obj1 === obj2

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

    for (var attr in obj1) {
        var t1 = obj1[attr] instanceof Object;
        var t2 = obj2[attr] instanceof Object;
        if (t1 && t2) {
            return diff(obj1[attr], obj2[attr])
        } else if (obj1[attr] !== obj2[attr]) {
        	console.log('false')
            return false
        }
    }

    console.log('true')
    return true
}

var a = {
    name: {
        sex: 'men',
        age:{
        	tt:'19'
        }
    }
};
var b = {
    name: {
        sex: 'men',
        age:{
        	tt:'18'
        }
    }
};

diff(a,b)