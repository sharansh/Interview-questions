//when the user stops typing an input then only API calls happen.

//debouncing: means with when the user stops typing then to make the api call

let counter = 0;

function getData(){
    console.log('getting data', counter++);
} 

const debounceFunction = function(fn, d){
    console.log('i aclled');
 let timer;
 return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
        fn.apply(context, args);
    }, d)
 } 
}

const betterFunction = debounceFunction(getData, 300);
console.log(betterFunction());