//increase Count
const makeCounter = () => {
    let count = 0;
    return () => {
        return ++count;
    }
}

const counter = makeCounter();
counter();
counter();


//inverse an Object
function Inverse(obj){
    var retObj = {};
    for(let key in obj){
        retObj[obj[key]] = key;
    }
    return retObj;
}

// var student = {name: 'jack', age: 12, std: 18, fees: 5000};
//console.log(Inverse(student));

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map((key) => [key, obj[key]]);

console.log(result);

const array = ["hello", "world", "this", "is", "an", "example"];

const groupedArray = array.reduce((acc, current) => {
  const key = current.length;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(current);
  return acc;
}, {});

console.log(groupedArray);
