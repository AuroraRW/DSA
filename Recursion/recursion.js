////Step 1: stop point
// function func(){
//     debugger
//     func()
// }
// func()

////Step 2: recursion
// let counter = 0
// function func(){
//     // debugger
//     if(counter>3){
//         return 'done'
//     }
//     counter++
//     // func()
//     return func()
// }
// console.log(func())


//////////////Fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Output the value of the input index
// function fibonacciIterative(n) {
//     let arr = [0, 1];
//     for (let i = 2; i < n + 1; i++) {
//         arr.push(arr[i - 2] + arr[i - 1]);
//     }
//     return arr[n];
// }
// console.log(fibonacciIterative(3));

// function fibonacciRecursive(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
// }
// console.log(fibonacciRecursive(6))

/////////////////// Factorial: 5!=5*4*3*2*1
function findFactorialIterative(number) {
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}
console.log(findFactorialIterative(5))

function findFactorialRecursive(number) {
    if (number === 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1)
}
console.log(findFactorialRecursive(5))
