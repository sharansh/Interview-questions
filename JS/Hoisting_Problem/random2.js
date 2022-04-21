//properties assigned to an Object
let obj ={};

obj['key1'] = 12;
//or
obj.key2 = 12;

//status of a checkBox
alert(document.getElementById('checkbox1').checked);

//== and ===
//== only checks the equality
//=== checks the type and value

//operating system on client machine
navigator.platform

//function of delete operator
//delete helps to delete property and value 
var student = {age: 20, batch: 'ABC'};
delete student.age;

//use of void(0)
//helps to prevent the page from refresing.

//alert and confirm difference
// alert has one button ok and confirm has 2 button ok and cancel

//javascript cookies
//test files stored in computer when the user visits the website to store information they need

// push and unshift
//push appends at last and unshift append at begining

//window.onload() and onDocumentReady()
// onload function is not run untill all the information on the page is loaded. this leads to
//substancial delay before any code is executed
//onDocument Ready loads the code just after the DOM is loaded. This allows early 
//manipulation of the code

//history object
//helps the browser can be used to switch pages as back, forward from current page
//history.back()
//history.forward()
//history.go(number)

//undefined, not defined, null difference
var a;
console.log(a); // undefined
console.log(b); // not defined
var c = null;
console.log(c) // null

//strict mode
//throw error which normally js does not do. it helps in debugging

//self invoking functions or Immediately invoked function Expressions
(function(){
    console.log('IIFI');
})();

//loosely typed or dynamic language
//javascript variable are not directly associated with any type and any variable can be assigned
var test = '20';
test = 30;
test = true;

//slice() and splice()
//slice removes the items from an array and formed as new array
//splice does not form the new array

//redirection of page in JS
//can be done with two ways
//location.href --> redirect the page. you can get back the page./
//location.replace --> in this we cannot get acccess back the actual document

//typeof and instanceof
//typeof --> returns a string of what type of operand is
//instanceof --> does not work with premitive datatype but works with object and checks on what
//type the object is

//anonymous functions
// function without name
let show = function () {
    console.log('anonymous function')
};
show();

//DOM(Document Object Modal)
//it is object representation of the HTML element. All the element are part of window.document

//window and document Difference
//windows is global object which holds variables, function, history, location
//document comes under the window

//innerHTML and innerText Difference
//innerHTML will process as HTMLtag if found in a string, whereas innerText will not
document.querySelector('p').innerHTML = 'one </br> two' // gives the output in two lines
document.querySelector('p').innerText = 'one </br> two' //gives in one line

//HTMLCollection and NodeList
//function querySelectorAll() return NodeList in which the forEach can be used directly to
//transverse the element
//getElementByClassName() or getElementByTagName() returns as HTMLCollection, which does not
// have a for wach by default

//HTMLCollection can be traversed
//first its hould be converted into array and then you can use forEach

