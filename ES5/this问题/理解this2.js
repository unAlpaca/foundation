

// 当前调用栈是：baz     
// 因此，当前调用位置是全局作用域  

function baz() {     
    console.log( "baz" );     
    bar(); // <-- bar 的调用位置 
} 
 

// 当前调用栈是 baz -> bar     
// 因此，当前调用位置在 baz 中
function bar() { 
    
 
    console.log( "bar" );     
    foo(); // <-- foo 的调用位置 
} 
 

// 当前调用栈是 baz -> bar -> foo     
// 因此，当前调用位置在 bar 中 
 
function foo() {     
    console.log(this)
    console.log( "foo" ); 
} 
 
baz(); // <-- baz 的调用位置

// 然后根据调用位置，去决定this的指向
