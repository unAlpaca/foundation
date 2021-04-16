let a = {
    name:"a"
}

let b = {
    name:"b",
    child_c:{
        name:"chile_c"
    }
}

let x = Object.assign(a,b)
console.log(x);

b.name = "change_b"
b.child_c.name = "chile_c_change"

console.log(x);
console.log(b);

//object.asing 一层是深拷贝
//两层是浅拷贝