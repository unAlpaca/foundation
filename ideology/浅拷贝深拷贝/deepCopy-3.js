/**
 * 以下对象会导致循环引用，而内存溢出
 * 对象的属性间接或直接的引用了自身
*/

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;