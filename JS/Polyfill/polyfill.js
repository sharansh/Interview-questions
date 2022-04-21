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
    
    
    var myFlat = (arr, n = 1) => {
        return n > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? myFlat(val, n-1): val ),[])
        : arr.slice()
    }
       
    const arr23 = myFlat(array1)
    console.log(arr23);
    
    
    // polyfill of call
    
    Function.prototype.myCall = function(someObj, ...args){
        someObj.func = this;
        someObj.func(...args);
    }
    
    
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