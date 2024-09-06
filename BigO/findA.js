// Example 1
// const arr = ['A']
// function findA(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'A') {
//       console.log('Found!')
//     }
//   }
// }
//findA(arr)

// Example 2
// const arr = ['A']
// // const arr = ['A','B','C','A']
// // const arr = ['A','B','C','A', 'A','B','C','A','A','B','C','A','A','B','C','A',
// //     'A','B','C','A','A','B','C','A','A','B','C','A','A','B','C','A','A','B','C','A'
// // ]
// // const arr = new Array(100000).fill('A')
// function findA(array) {
//     let t0 = performance.now()
//     console.log(t0)
//     for (let i = 0; i < array.length; i++) {
// O(n)
//         if (array[i] === 'A') {
//             console.log('Found!')
//         }
//     }
//     let t1 = performance.now()
//     console.log(t1)
//     console.log("It took " + (t1 - t0) + " milliseconds.")
// }

// findA(arr)


// Example 3
// const arr = ['A','B','C','A', 'A','B','C','A','A','B','C','A','A','B','C','A',
//         'A','B','C','A','A','B','C','A','A','B','C','A','A','B','C','A','A','B','C','A'
//     ]
// const arr = new Array(100000).fill('A')
// function findFirstElement(array){
//     let t0 = performance.now()
//     console.log(array[0])     // O(1)
//     let t1 = performance.now()
//     console.log("It took " + (t1 - t0) + " milliseconds.")
// }
// findFirstElement(arr)


// Example 4
// const arr = ['A','B','C','A', 'A','B','C','A','A','B','C','A','A','B','C','A',
//             'A','B','C','A','A','B','C','A','A','B','C','A','A','B','C','A','A','B','C','A'
//         ]
// function findFirstElement(array){
//     console.log(array[0])     // O(1)
//     console.log(array[1])     // O(1)
// }

// findFirstElement(arr) // O(2)

//////////////////////////Exercise/////////////////////////
// Ex 1
// function funChallenge(input) {
//     let a = 10;
//     a = 50 + 3;

//     for (let i = 0; i < input.length; i++) {
//       anotherFunction();
//       let stranger = true;
//       a++;
//     }
//     return a;
//   }

// Solution
// function funChallenge(input) {
//     let a = 10; // O(1)
//     a = 50 + 3; // O(1)

//     for (let i = 0; i < input.length; i++) { // O(n)
//       let stranger = true; // O(n)
//       a++;                // O(n)
//     }
//     return a; //O(1)
// }

// O(n)

// Ex 2
// function anotherFunChallenge(input) {
//     let a = 5
//     let b = 10
//     let c = 50
//     for (let i = 0; i < input; i++) {
//         let x = i + 1
//         let y = i + 2
//         let z = i + 3

//     }
//     for (let j = 0; j < input; j++) {
//         let p = j * 2
//         let q = j * 2
//     }
//     let whoAmI = "I don't know"
// }

// Solution
// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) { // O(n)
//         let x = i + 1; // O(n)
//         let y = i + 2; // O(n)
//         let z = i + 3; // O(n)

//     }
//     for (let j = 0; j < input; j++) { // O(n)
//         let p = j * 2; // O(n)
//         let q = j * 2; // O(n) 
//     }
//     let whoAmI = "I don't know"; // O(1)
// }
// O(n)