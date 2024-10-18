// if a string is Palindrome or not
// palindrome(s): 

function isPalindrome(s) {
    if (s.length <= 1) {
        return true;
    }
    if (s[0] !== s[s.length - 1]) {
        return false; 
    }
    return isPalindrome(s.slice(1, s.length - 1));
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));  
console.log(isPalindrome("A man a plan a canal Panama")); 

// Maximum element in array
function findMax(arr, n) {
    if (n === 1) {
        return arr;
    }

    const maxOfRest = findMax(arr, n - 1);

    return arr[n - 1] > maxOfRest ? arr[n - 1] : maxOfRest;
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const maxElement = findMax(array, array.length);
console.log("The maximum element in the array is:", maxElement);


// Count vowel in string
function countVowels(str, index = 0) {
    if (index === str.length) {
        return 0;
    }

    const vowels = 'aeiouAEIOU';
    const isVowel = vowels.includes(str[index]) ? 1 : 0;

    return isVowel + countVowels(str, index + 1);
}

const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log("The number of vowels in the string is:", vowelCount);

// reverse a string
// R(s) = R(s[1:end]) + s[0]

function reverseString(s) {
    if (s.length <= 1) {
        return s;  
    }
    return s[s.length - 1] + reverseString(s.slice(0, -1));
}

console.log(reverseStringRecursive("hello"));  
console.log(reverseStringRecursive("world")); 


// x power of n
// power(x, n) = x * power(x, n-1)
function power(x, n) {
    if (n === 0) {
        return 1; 
    }
    if (n < 0) {
        return 1 / power(x, -n); 
    }
    return x * power(x, n - 1);
}

console.log(power(2, 3));  
console.log(power(2, -2)); 
console.log(power(5, 0));  

// return the length of string
// lenght(s) = 1 + length(s[1:end])

function stringLength(s) {
    if (s === "") {
        return 0;
    }
    // s.slice(1) start from index of 1 to the end
    return 1 + stringLength(s.slice(1));
}

const example = "hello";
console.log(stringLength(example)); 


// sum of an array
// sum(arr) = arr[0] + sum(arr[1:])
function arraySum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + arraySum(arr.slice(1));
}

const numbers = [1, 2, 3, 4, 5];
console.log(arraySum(numbers)); 






