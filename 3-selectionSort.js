const { dissarangedNumbers } = require('./0-random-array-gen')

// Generates random array
let arrayToSort = dissarangedNumbers(30);

// Selection Sort Algorithm
const selectionSort = arr => {
    let minIndex
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr
}

// Prints Sorted Array
console.log(`Array To Sort: \n [${arrayToSort}]`);
console.log(`Sort Array: \n [${selectionSort(arrayToSort)}]`);