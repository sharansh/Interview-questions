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