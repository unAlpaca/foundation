function* foo() {
    var x = yield 2;
    z++;
    var y = yield (x * z);
    console.log(x, y, z);
}
var z =1;
var it1 = foo(); //创建迭代器
var it2 = foo(); //创建迭代器

var val1 = it1.next().value; //val1 = 2
var val2 = it2.next().value; //val2 = 2

val1 = it1.next(val2 * 10).value;  //x =20,z =2,   val1 = 40
val2 = it2.next(val1 * 5).value;   //x =200,z =3,   val2 =600

it1.next(val2/2);   // y =300,   (20,300,3)
it2.next(val1/4);  //y=10, ( 200,10,3)