main(){
    var p = Person('name');
    print(p.age);
    print(p.name);
}

void sayHello(String name){
    print(name);
}

class Person{
  final String name;
  final int age;

  // Person(this.name, this.age);
  Person(this.name,{this.age = 10});
}
