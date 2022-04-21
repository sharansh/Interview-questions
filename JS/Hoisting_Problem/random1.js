//problem 1
function foo(){
    let a = b = 0;
    a++;
    return a;
}
foo();
console.log(a);
console.log(b);
// undefined, 0

//problem 2
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes);
// []

//problem3
for(var i=0;i<3;i++){
    const log = () => {
        console.log(i);
    }
    setTimeout(log,300);
}
//3,3,3
for(let i=0;i<3; i++){
    const log = () => {
        console.log(i);
    }
    setTimeout(log,300);
}
//0,1,2
for(let i =0; i<3;i++){
    (function(y){
        const log = () => {
            console.log(i);
        }
        setTimeout(log,300);
    })(i)
}
//0,1,2

//problem4
var a =10;
function a(){
    console.log('20');
}
a();
//a is not a function

//problem5
function foo() {
    console.log(this);
}
//window

//problem6
[1,2,3,4,6]
console.log(...[1,2,3,4,6]);
//1,2,3,4,6

//problem7
const promise = (a) => {
    return new Prromise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise Reolved');
            resolve(a);
        }, 3000)
    })
}

promise('132').then((value) => {
    console.log('my promise got resolved', value);
})
//132

//problem8
let myfunc = (function () {
    var a =10;
    return function () {
        return a;
    }
})()
console.log(myfunc());
//10

//problem9
let a = {name: 'foo'};
let b = Object.create(a);
delete b.name;
console.log(b.name)
//foo --> 

//problem10
1+ true
//2

//problem11
var a = [];
a.foo = 12;
console.log(a.length);
//0

//problem12
var a = 10;
b(40);
function b(x){
    a(20);
    a = 50;
    function a() { console.log("inside fun call:", x);}
    console.log('After fun call: ', a);
}
console.log(a);
//40 50 10