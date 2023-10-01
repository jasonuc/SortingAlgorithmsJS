const { dissarangedNumbers } = require('./0-random-array-gen')

// Generates random array
let arrayToSort = dissarangedNumbers(30);

// Insertion Sort Algorithm
const insertionSort = arr => {
    let sorted = []
    let minIndex
    const originalLength = arr.length
    for (let i = 0; i < originalLength; i++) {
        minIndex = 0
        for (let j = 0; j < originalLength - i; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        sorted.push(arr.splice(minIndex, 1)[0])
    }
    return sorted
}

// Prints Sorted Array
console.log(`Array To Sort: \n [${arrayToSort}]`);
console.log(`Sort Array: \n [${insertionSort(arrayToSort)}]`);