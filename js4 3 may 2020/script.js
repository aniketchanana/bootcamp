
// (function(a,b) {
//     console.log('sum',a+b);
// })(2,3);

// var a;

// a = 5;

function example() {
    var age = 10;
    function displayAge() {
        console.log(age);
    }
    function incAge() {
        age = age+1;
        displayAge();
    }
    return {
        incAge,
    displayAge};
}

age = 10;

{
    var a = 10;
}

console.log(a);