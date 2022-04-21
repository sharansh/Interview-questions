//reverse the string wordbyword --> this is the test 
function reverseWords(str){
    return str.trim().split(' ').reverse().join(' ');
}

//console.log(reverseWords(' I am testing things'));

//remove Vovels for a String 
function removeVowels(str){
    return str.replace(/[aeiou]/gi, '');
}

// console.log(removeVowels('hello sharansh'));

//count palindromic substring --> abba ---> abba || aaa => 6(a,a,a,aa,aa,aaa)

function countPalindromes(str, left, right){
let count = 0;
while(left >= 0 && right < str.length && str.charAt(left) == str.charAt(right)){
count++;
left++;
right++;
}
return count;
}

function countPalandromicSubstring(str){
    if(!str) return 0;
    let count = 0;
    for(let i = 0; i< str.length; i++){
        count += countPalindromes(str, i, i);
        count += countPalindromes(str, i, i+1);
    }
    return count;
}

// console.log(countPalandromicSubstring('aaa'));

//array of fullname --
let name = [{firstname: 'sharansh', lastname: 'shandilya'}, {firstname: 'swati', lastname: 'dubey'}];

function fullname(name){
    return name.map(item => item.firstname + ' ' + item.lastname);
}

// console.log(fullname(name));

//longest word in string --> 'my name is SHaransh' ---> sharansh

function longestWord(str){
    let string = str.split(' ');
    let longestword = string.sort((a,b) => b.length - a.length);
    return longestword[0];
}

function longestWord1(str){
    let string = str.split(' ');
    return string.reduce((acc,cum) => {
       return acc.length >= cum.length ? acc : cum 
    }, '')
}
// console.log(longestWord1('my name is SHaransh'))