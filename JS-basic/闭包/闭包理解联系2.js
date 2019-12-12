

var scope = "global scope";
function checkScope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f();
}

console.log(checkScope()());

//这里返回local scope




var scope = "global scope";
function checkScope() {
    var scope = "local scope";
    function f() {
    	console.log(scope)
        return scope;
    }
    return f;
}
checkScope()();

//local scope


/**
heckScope被invoke时，将内部嵌套的函数f返回，因此checkScope()()这句执行时，其实运行的是f(),f函数返回scope变量，在这种情况下，f会从哪个作用域里去寻找变量scope呢？
remember 词法作用域的基础规则：函数被执行时(executed)使用的作用域链(scope chain)是被定义时的scope chain，而不是执行时的scope chain
嵌套函数f(), 被定义时，所在的作用域链中，变量scope是被绑定的值是“local scope”，而不是"global scope"，因此，以上代码的结果是啥？没错，是"local scope"!

作者：佩吉秋
链接：https://www.jianshu.com/p/132fb6d485ee
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
*/


