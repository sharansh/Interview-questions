//create a folder inside that JS folder and then add couple of files which add, substract and 
//clone array in it. then in terminal do npm init -y. which will make the package.json and
//initilize default values.
//then install jest

// clonearray.js

//script: {'test': 'jest --coverage'}
function cloneArray(array){
    return [...array];
}
//create a file with samename like sum.test.js

tests('properly adds two numbers', () => {
   expect(sum(1,2)).toBe(3);
})

//cloneArray.test.js
const cloneArray = require('./cloneArray');
tests('properly clones array', () => {
    const array = [1,2,3];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
})