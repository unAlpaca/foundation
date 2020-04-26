let a =10;

(function(){    
    let a = 100;

    fnc()()



})()


function fnc(){
    let a = 1000;

    return function(){
        console.log(this)
    }
}