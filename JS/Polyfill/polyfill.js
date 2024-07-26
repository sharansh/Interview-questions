//function polyfill
let printName = function (city, state, country){
    //  console.log(this.firstname + ' ' + this.lastname + ' '+ city + ' '+ state + ' ' + country);
    }
    
    let person = {
        firstname: 'sharansh',
        lastname: 'shandilya',
    }
    
    let perosn2 = {
        firstname: 'happy',
        lastname: 'mishra',
    }
    
    Function.prototype.mybind = function(...args){
        let obj = this
         param = args.slice(1);
        return function(...args2) {
            obj.apply(args[0], [...param, ...args2]);
        }
    }
    
    let testTwo = printName.mybind(perosn2, 'lucknow', 'Uttar Pradesh') ;
    testTwo('India');
    
    //array polyfill
    
    var arr = [1,2,3,4,5,6,7,8,9,10];
    
    //foreach
    arr.forEach((currentValue, index, arr) => {
    // console.log('test',currentValue, index, arr);
    });
    
    Array.prototype.myForEach = function(callback) {
        for(let index =0; index< this.length; index++){
        callback(this[index], index, this);
        }
    }
    arr.myForEach((item) => {
    // console.log(item+ 100);
    })
    //map implementation
    
    Array.prototype.myMap = function(callback) {
        let result =[];
    for(let index = 0; index < this.length; index++){
        result.push(callback(this[index], index, arr));
    }
    return result;
    }
    // const arr1 = arr.myMap( item => item + 100);
    // console.log(arr1);
    
    //filter implementation
    
    Array.prototype.myFilter = function(callback) {
        let result1 = [];
        let arr1 = this;
     for(let index= 0; index < arr1.length; index++){
         if(callback(arr1[index], index, this)){
             result1.push(arr1[index]);
         }
     }
     return result1;
    }
    
    // const arr1 = arr.myFilter( (item => item > 8));
    // console.log(arr1);
    
    //find implementation
    
    Array.prototype.myFind = function(callback) {
     let result;
     for(let index=0;index< this.length;index++){
         if(callback(this[index], index, this )){
            result = this[index]
            break;
         }
     }
     return result
    }
    // const arr1 = arr.myFind( (item => item === 8));
    // console.log(arr1);
    
    // reduce impementation
    // reduce((accumulator,currentValue, index, arr) => {},intialvalue);
    
    Array.prototype.myReduce = function (callback, intialvalue) {
        let result = intialvalue;
        for(let index= 0;index<this.length;index++){
            result = callback(accumulator, this[index], index, arr);
        }
        return result;
    }
    
    const arr1 = arr.myReduce( (item => item+ item), 8);
    // console.log(arr1);
    
    //polyfill of Number.isNaN
    
    Number.isNaN = Number.isNaN || function isNaN(a){
        return typeof(a) === 'number' &&  a!==a;
    }
    
    //Array.flat
    
    let array1 = [[1,2,3],[1,2],[1,3,[4,[5,6]]]];
    let array2 =[[1,2,3],[4,5],[6,7]];
    
    function myFlat(arr, depth = 1) => {
        return depth ? arr.reduce((acc, curr) => {
            [...acc,...(Array.isArray(curr) ? myFlat(curr, depth-1) : [curr])]
        },[])
        : arr
    }

function trottle(func, wait){
    let waiting = false, lastArgs = null;
    return function(...args){
        if(!waiting){
            waiting = true;
            func.apply(this, args);
            let timeout = setTimeout(() => {
                waiting = false;
                if(lastArgs){
                    func.apply(this, lastArgs);
                    waiting = true;
                    lastArgs = null;
                    timeout();
                }
                timeout()
            }, wait)
        }
        else{
            lastArgs = args
        }
    }
}

function Debounce(func, wait){
    let cancel = null
    return (args) => {
        clearTimeout(cancel);
        cancel = setTimeout(() => func(...args), wait)
    }
}

function curry(fn){
    return function curried(...args){
        if(args.length >= func.length) return fn(...args)
        return (...args2) => curried(...args, ...args2)
    }
}    
    
// polyfill of call
    
Function.prototype.myCall = function(someObj, ...args){
    someObj.func = this;
    someObj.func(...args);
}

// memoization polyfill
function memo(func, resolver = (...args) => args.join('_')){
    const cache = new Map();
    return function(...args){
        const cacheKey = resolver(...args);
        if(cache.has(cacheKey)){
            return cache.get(cacheKey)
        }
        const value = func.apply(this, args);
        cache.set(cacheKey, value);
        return value;
    }
}
function testThis(a){
    return `${this.val}_${a}`;
}
const memoFunc = memo(testThis);
const testSubject = {
    val: 1,
    memo: memoFunc
}
const testSubject2 = {
    val: 2,
    memo: memoFunc
}
// 1_1
console.log(testSubject.memo(1));
// Expected no cacheing and output 1_1
console.log(testSubject2.memo(1));
//Expected to cache
console.log(testSubject2.memo(1));




    
    
    // Questions
    
    // promise polyfill
    // redux mae store implement
    // store.getstate() and store.getsubscribe()
    // how browser works
    // cretical render path
    
        // ----- Design -----
    
    
        // ------ Architecture ----
    
    
        //  ---- Security Topics ------
       
            // cross domain API are not allowed why? ---- Same Orgin Policy ---
            // CORS- cross orgin resouce sharing.
            // token mechanism authentication and aurthorization--- Token (what it is)?-- generation and utlilization
            // JWT
    
       // ---- Performance topics ------
         // SASS - syntectically awesome style sheet
         // Lazy Loading
         // multiple sign in application
