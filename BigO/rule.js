//////////////////////////////// Rule 1: worst case///////////////////////////////

// const arr = ['B','B','C','B', 'B','B','C','B','B','B','C','B','B','B','C','B',
//         'B','B','C','B','B','B','C','B','B','B','C','B','B','B','C','B','B','B','C','A'
//     ]
// function findA(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'A') {
//       console.log('Found!')
//       break;
//     }
//   }
// }
// findA(arr)

//////////////////////////////// Rule 2: Remove constants///////////////////////////////

// function myFunc(items) {
//     console.log(items[0]);

//     var middleIndex = Math.floor(items.length / 2);
//     var index = 0;

//     while (index < middleIndex) {
//         console.log(items[index]);
//         index++;
//     }

//     for (var i = 0; i < 100; i++) {
//         console.log('hi');
//     }
// }

// // O(1 + n/2 + 100)
// // O(2n) is O(n)

//////////////////////////// Rule 3: Different terms for inputs////////////////////////

// const arr1 = ['B','B','C','B', 'B','B','C','B','B','B','C','B','B','B','C','B',
//             'B','B','C','B','B','B','C','B','B','B','C','B','B','B','C','B','B','B','C','A']
// const arr2 = ['B','B','C','B', 'A']
// function findA(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'A') {
//       console.log('Found!')
//       break;
//     }
//   }
// }
// findA(arr1)
// findA(arr2)

// // O(n)


// const arr1 = ['B','B','C','B', 'B','B','C','B','B','B','C','B','B','B','C','B',
//             'B','B','C','B','B','B','C','B','B','B','C','B','B','B','C','B','B','B','C','A']
// const arr2 = ['B','B','C','B', 'A']
// function findA(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] === 'A') {
//         console.log('Found!')
//         break;
//       }
//     }
//     for (let i = 0; i < array2.length; i++) {
//         if (array2[i] === 'A') {
//           console.log('Found!')
//           break;
//         }
//       }
//   }
//   findA(arr1, arr2)

// O(m+n)

/////////////////////////////////O(n^2)/////////////////////////////
// output all pairs of array
// const arr = ['a', 'b', 'c', 'd', 'e'];
// function myFunc(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j])
//     }
//   }
// }
// myFunc(arr)

// // O(n*n)

////////////////////////Rule 4: Drop Non Dominants////////////////////
// output all numbers then all pair sum
// function myFunc(numbers) {
//     console.log("these are the numbers:")
//     for (let i=0; i<numbers.length; i++){
//         console.log(numbers[i]);
//     }
//     console.log("and these are their sums:")
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             console.log(numbers[i] + numbers[j])
//         }
//     }
//   }
  
//   myFunc([1, 2, 3, 4, 5]); // O(n^2)

