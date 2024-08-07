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

function findUniquePairsWithSum(array, target) {
  const pairs = [];
  const visited = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (sum === target && !visited.has(array[i]) && !visited.has(array[j])) {
        pairs.push([array[i], array[j]]);
        visited.add(array[i]);
        visited.add(array[j]);
      }
    }
  }

  return pairs;
}

setTimeout(function(){console.log('setTimeout')},2000);
Promise.resolve().then(function(){console.log('promise resolve')})

let items = [
    {color: 'red', type: 'tv', age: 18},
    {color: 'silver', type: 'phone', age: 20},
    {color: 'blue', type: 'book', age: 17},
];

const excludes = [
    {k: 'color', v: 'silver'},
    {k: 'type', v: 'tv'},
];

function excludesItems(items, excludes){
    const excludesMap = new Map();
    for(let {k, v} of excludes){
        if(!excludeMap.has(k)){
            excludesMap.set(k, new Set());
        }
            excludes.get(k).add(v);
    }
    return items.filter(item => {
     return Object.keys(item).every(
            key => !excludes.has(key) || !excludesMap.get(key).has(item[key])
        )
    })
}
console.log({items});
