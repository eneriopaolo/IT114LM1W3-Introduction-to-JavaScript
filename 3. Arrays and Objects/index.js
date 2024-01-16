/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log("First number: " + numbers[0])
console.log("Fifth number: " + numbers[4])
console.log("Last number: " + numbers.at(-1))

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let max = Math.max(...numbers)
let min = Math.min(...numbers)
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log("Max value: " + max)
console.log("Min value: " + min)
console.log("Average: " + sum / numbers.length)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: I would say that they are almost identical. Although python's list is a little bit more versatile.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let subject = {
  courseCode: "IT114L",
  name: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
  units: 1,
  numOfStudents: 40,
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
subject.profName = "Job Lipat"
console.log("Professor Name: " + subject.profName)
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let myCourses = {
  courseCode: ["CS107L","CS107","IT114L","IT114","IT133","CS120","VE023","HUM082","SS036"],
  courseUnits: [1, 2, 1, 2, 3, 3, 1, 3, 3],
}

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0
for (let i = 0; i<myCourses.courseUnits.length; i++) {
  totalUnits += myCourses.courseUnits[i]
}
console.log("Total number of units: " + totalUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Python classes. Both of them functions the same but the syntax are different.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
const copyOfNumbers = [...numbers, 29]

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
console.log({...subject})
