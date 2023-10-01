const { dissarangedNumbers } = require('./0-random-array-gen.js')

// Generates random array
let arrayToSort = dissarangedNumbers(30);

// Bubble Sort Algorithm
const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
// Prints Sorted Array
console.log(`Array To Sort: \n [${arrayToSort}]`);
console.log(`Sort Array: \n [${bubbleSort(arrayToSort)}]`);