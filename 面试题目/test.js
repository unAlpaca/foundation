class Modal{
    static z = 10;
    static n=200
    constructor(x,y){
        this.x = x;
        this.y =y
    }
    getX(){
        console.log(this.x);
    }
    getY(){
        console.log(this.y);
    }
}
Modal.setNumber=function(n){
    this.n=n;
};

let m = new Modal(10,20);
console.log(m);
console.log(m.x);
console.log(m.y);
console.log(m.hasOwnProperty('z'));
console.log(m.n);