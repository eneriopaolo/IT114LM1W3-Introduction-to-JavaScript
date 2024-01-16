/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 4.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(x => x * x)
console.log(squares)
// TODO 4.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNum = numbers.filter(y => y % 2 === 0)
console.log(evenNum)
// TODO 4.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce(function (result, item){return result + item})
console.log("Sum: " + sum)
// TODO 4.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercaseWords = words.map(word => word.toUpperCase())
console.log(uppercaseWords)
// TODO 4.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const myArray = words.filter(word => word.length > 4)
console.log(myArray)
// TODO 4.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedArray = words.reduce(function (result, word) {return result + word})
console.log(concatenatedArray)
// Checkpoint 4.1 Summarize what map, filter, and reduce do
// Answer:
// Map: This method creates an array from an existing array with options to modify the elements with arguments
// Filter: This method creates an array from an existing array with elements that meet certain conditions
// Reduce: This method executes a reducer function in an array which condenses its elements into a single value.
