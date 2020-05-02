function add(a,b,callback) {
    let sum = a+b;
    console.log('addition is performed');
    callback(sum);
}

add(3,4,function(result) {
    console.log('callback is called');
    console.log(result);
})

function test() {
    var a = 10;
}
{
    let a = 10;
}
console.log(a);

es5
function person(name,age) {
    this.name = name;
    this.age = age;
}

person.prototype.incAge = function(){
    this.age = this.age+1;
}
var a = new person('aniket',20);
var b = new person('mohit',19);
console.log(a);
console.log(b);
b.incAge();
console.log(b);


es6
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    incAge() {
        this.age = this.age+1;
    }
}

var a = new Person('aniket',10);
console.log(a);

