//sum of numbers like Sum([1,5]) or Sum([5,1]);
function SumTo(arr){
    let arr0 = arr[0];
    let arr1 = arr[1];
    let output = 0;

    if(arr0 > arr1){
        arr0 = arr0 + arr1;
        arr1 = arr0 - arr1;
        arr0 = arr0 - arr1;
    }

    for(let i= arr0; i<= arr1; i++){
        output += i;
    }

    return output;
}

let arr = [1,5];
// console.log(SumTo(arr));

//factorial of numbers like 4! = 4*3*2*1 = 24

function factorial(num){
    if(num != 1){
        return num * factorial(num-1)
    }else{
        return 1;
    }
}

// console.log(factorial(5));

//fibonacci -- each number should be addition to two preceding number

function fibonacci(n){
    if(n <= 1){
        return n;
    } else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function printfibonacci(n){
    for(let i =0; i< n; i++){
        console.log(fibonacci(i))
    }
}
// console.log(printfibonacci(7)); 

//prime number between min and max
function isPrime(num){
    let primeFlag = true;
    for(let i= 2; i<= num/2; i++){
        if(num % i === 0){
            primeFlag = false;
            break;
        }
    }
    if(primeFlag){
        console.log(num)
    }
}

function printPrimeNumbers(min, max){
    for(let i = min; i<= max; i++){
        if(i == 0 || i == 1){
            continue
        }
        isPrime(i)
    }
}

// console.log(printPrimeNumbers(0,10));

//polindrome ---> madam

function polindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

// console.log(polindrome('madam1'));

//anagram --> a word, pharase or name formed by rearrenging the letters of another
//spar ---> rasp

function sortString(str){
    return str.split('').sort().join();
}

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    return sortString(str1.toLowerCase()) === sortString(str2.toLowerCase());
}

// console.log(isAnagram('racecar', 'carrace'));
