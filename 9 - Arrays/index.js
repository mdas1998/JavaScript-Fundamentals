/* Arrays */

let arr = [1, 2, 3, 4, 5];
arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes the last element (6)
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.unshift(0); // Adds 0 to the beginning of the array
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

arr.shift(); // Removes the first element (0)
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.splice(2, 1); // Removes the element at index 2 (3)
console.log(arr); // Output: [1, 2, 4, 5]

arr = arr.concat([6, 7]); // Concatenates [6, 7] to the end
console.log(arr); // Output: [1, 2, 4, 5, 6, 7]

arr = arr.slice(1, 4); // Slices the array from index 1 to 3
console.log(arr); // Output: [2, 4, 5]

arr.forEach((item, index) => {
  console.log(`Item at index ${index}: ${item}`);
}); // Iterates over the array and logs each item

let mappedArr = arr.map(item => item * 2); // Maps each item to its double
console.log(mappedArr); // Output: [4, 8, 10]

let filteredArr = arr.filter(item => item > 2); // Filters items greater than 2
console.log(filteredArr); // Output: [4, 5]

let reducedValue = arr.reduce((acc, item) => acc + item, 0); // Sums all items
console.log(reducedValue); // Output: 11

let includesItem = arr.includes(4); // Checks if 4 is in the array
console.log(includesItem); // Output: true

let indexOfItem = arr.indexOf(5); // Finds the index of 5
console.log(indexOfItem); // Output: 2

let joinedString = arr.join(', '); // Joins array elements into a string
console.log(joinedString); // Output: "2, 4, 5"

let sortedArr = arr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(sortedArr); // Output: [2, 4, 5]

let reversedArr = arr.reverse(); // Reverses the array
console.log(reversedArr); // Output: [5, 4, 2]

let flatArr = [[1, 2], [3, 4]].flat(); // Flattens a nested array
console.log(flatArr); // Output: [1, 2, 3, 4]

let arrayFrom = Array.from('hello'); // Creates an array from a string
console.log(arrayFrom); // Output: ['h', 'e', 'l', 'l', 'o']  

let arrayOf = Array.of(1, 2, 3); // Creates an array from arguments
console.log(arrayOf); // Output: [1, 2, 3]

let isArray = Array.isArray(arr); // Checks if arr is an array
console.log(isArray); // Output: true

let fillArr = new Array(5).fill(0); // Creates an array of 5 zeros
console.log(fillArr); // Output: [0, 0, 0, 0, 0]

let findItem = arr.find(item => item > 2); // Finds the first item greater than 2
console.log(findItem); // Output: 4

let findIndexItem = arr.findIndex(item => item > 2); // Finds the index of the first item greater than 2  
console.log(findIndexItem); // Output: 1

console.log(typeof arr); // Output: "object" (arrays are objects in JavaScript)