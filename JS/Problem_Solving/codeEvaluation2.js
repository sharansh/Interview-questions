//union intersection difference
//input: arr1 = [1,2,3], arr2=[2,3,4]
//union(arr1, arr2) = [1,2,3,4,5];
//intersection(arr1, arr2) = [2,3];
//difference(arr1, arr2) =[1];
//difference(arr2, arr1)=[4];
//symmetricDifference(arr1,arr2) =[1,4];

function union(arr1, arr2){
    return [...arr1, ...arr2];
}
function intersection(arr1, arr2){
    return arr1.filter(item => arr2.includes(item))
}
function difference(arr1, arr2){
    return arr1.filter(item => !arr2.includes(item))
}
function symmetricDifference(arr1, arr2){
    return arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)))
}

//flatten array
function flattenArray(arr){
return arr.reduce((acc, curr) => {
 if(Array.isArray(curr)){
    acc = acc.concat(flattenArray(curr))
 } else{
    acc= acc.concat(curr)
 }
 return acc;
}, [])
}

// console.log(flattenArray([1,2,[2,3],[[[3]]]]));

//duplicte element in an array

function findDuplicate(arr){
 const set = new Set();
 for(let i = 0; i< arr.length; i++){
     if(set.has(arr[i])){
        return arr[i]
     } else{
        set.add(arr[i])
     }
 }
}

// console.log(findDuplicate([1,2,3,4,4,5]));

//Non repeating words in 2 strings

function nonRepeatingWords(str1, str2){
    let string1 = str1.split(' ');
    let string2 = str2.split(' ');
    return (
        string1.filter(item => !string2.includes(item)).
        concat(string2.filter(item => !string1.includes(item)))
    )
}

let str1= 'hello World';
let str2 = 'hello sharansh';
// console.log(nonRepeatingWords(str1, str2));

//longest Palindrome

function longestPolindrome(str){
    const set = new Set();
    let length = 0;
    for(let c of str){
        if(set.has(c)){
            set.delete(c)
            length++;
        } else {
            set.add(c)
        }
    }
    if(set.size){
        return 2 * length + 1
    } else {
        return 2 * length
    }
}

console.log(longestPolindrome('abccccdd'));

//longest Substring length without repeating characters

function longestSubStringlength(){
    const set = new Set();
    let i =0;
    let j= 0;
    let max = 0;
    while(i<str.length){
        if(!set.has(str.charAt(i))){
            set.add(str.charAt(i++));
            max = Math.max(max, set.size);
        } else {
            set.delete(str.charAt(j++))
        }
    }
 return max;
}

console.log(longestSubStringlength('abcdabd'));

//group anagrams
//input = ['eat', 'tea', 'tan','ate', 'nat', 'bat'];
//output = ['ate', 'eat', 'tea'],['nat','tan'], ['bat'];

function GroupAnangram(){
    const map = new Map();
    for(let word of arr){
        const key = [...word].sort().join('');
        if(!map.has(key)){
            map.set(key, [word])
        } else {
            let curr = map.get(key);
            map.set(key, [...curr, word])
        }
    }
    return map.values()
}

console.log(GroupAnangram(['eat', 'tea', 'tan','ate', 'nat', 'bat']))