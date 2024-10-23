let num = [2,4,5,78,45,1]
// console.log(num.sort())

// console.log(num.sort((a,b)=>{return a-b}))

////////////Bubble sorting/////////
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) { 
//       if(array[j] > array[j+1]) {
//         //Swap the numbers
//         let temp = array[j]
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }        
//   }
// }

// bubbleSort(numbers);
// console.log(numbers);
//////////////////////Selection sorting////////////////
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//     const length = array.length;

//     for (let i = 0; i < length - 1; i++) {
//         // Set current index as minimum
//         let min = i;
//         let temp = array[i];

//         for (let j = i + 1; j < length; j++) {
//             if (array[j] < array[min]) {
//                 // Update minimum if current is lower that what we had previously
//                 min = j;
//             }
//         }

//         array[i] = array[min];
//         array[min] = temp;
//     }

//     return array;
// }

// console.log(selectionSort(numbers));
/////////////////////Insertion sorting//////////////////
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//     const length = array.length;

//     for (let i = 0; i < length; i++) {
//         if (array[i] < array[0]) {
//             // Move number to the first position
//             array.unshift(array.splice(i, 1)[0]);
//         } else {
//             // Find where number should go
//             for (let j = 1; j < i; j++) {
//                 if (array[i] > array[j - 1] && array[i] < array[j]) {
//                     // Move number to the right spot
//                     array.splice(j, 0, array.splice(i, 1)[0]);
//                 }
//             }
//         }
//     }

//     return array;
// }

// console.log(insertionSort(numbers));
