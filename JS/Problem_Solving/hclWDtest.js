let cars=[
    {brand:"Audi", year: "2000"},
     {brand:"BMW", year: "2000"},
     {brand:"BMW", year: "2002"},
     {brand:"BMW", year: "2004"},
      {brand:"Audi", year: "2008"},
      {brand:"BMW", year: "2000"},
       {brand:"Mercedes", year: "2000"}
      ];

function carsList(cars){
    let resultList = {};
    cars.forEach(item => {
        if(resultList[item.brand]){
            resultList[item.brand] +=1 
        } else {
            resultList[item.brand] = 1
        }
    })
    return resultList;
}

// console.log(carsList(cars));

let section = [
    {firstName: 'xyz', lastName: 'BCD', Sec: 'A'},
    {firstName: 'xyz', lastName: 'BCD', Sec: 'B'},
    {firstName: 'www', lastName: 'BCf', Sec: 'B'},
    {firstName: 'yyy', lastName: 'BDg', Sec: 'A'},
]

function sectionUpdated(section){
    let result = {};
    section.forEach(item => {
        if(result[item.Sec]){
            result[item.Sec].push(item)
        } else{
            result[item.Sec] = [item]
        }
    })
    return result;
}

console.log(sectionUpdated(section));

var test = 'My name is sharansh';
function reverseString(st){
let output =[];
let inputsplited = st.split(' ');
for(let i =0; i< inputsplited.length; i++){
output.push(inputsplited[i].split('').reverse().join(''));
}
return output.join(' ');
}
console.log(reverseString(test)); 

//question
let obj= {
    'EN': {
    content : 'English',
    },
    'HI': {
    content : 'Hindi',
    }};
//answer
    for(const language in obj){
        if(language === 'EN'){
        console.log(obj[language]);
        }
        }