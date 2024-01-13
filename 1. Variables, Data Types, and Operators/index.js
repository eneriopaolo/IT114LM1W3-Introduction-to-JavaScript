/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log(myString)
var myString = "Hello World!"
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let x = 5
console.log(x)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// There will be an error if you try reassigning a const variable
// Your code here
const y = 10
console.log(y)
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is a simple variable declaration in JavaScript;let declaration can let the variable be 
// manipulated during runtime; const declaration can't be reassigned during run time or there will be an error

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
var num1 = 1 + 2 * 9
console.log(num1)
num1++
console.log(num1)
num1--
console.log(num1)
const num2 = -num1
console.log(num2)
const num3 = +num2
console.log(num3)
console.log(num3 ** 2)

// Checkpoint 1.2 What operators did you use?
// Answer: Increment, Decrement, Unary Negation, and Unary Plus
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
var fName = "Paolo "
var lName = "Enerio"
console.log(fName + lName)
console.log("Cabuyao, " + "Laguna")

// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const a1 = 5
const a2 = 6
const a3 = 5.0
const a4 = 3
const a5 = true
console.log(a1 == a3 && a5)
console.log(a1 == a3 && a2 < a4)
console.log(a1 < a2 || a4 < a1)
// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND & Logical NOT


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const myArray = ["Adobo", "Sisig", "Karaage", "Ramen"]
console.log("Fries" in myArray)
console.log("Adobo" in myArray)
console.log(2 in myArray)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] is 'truthy' because it's an array and therefore an object; All objects are 'truthy'
// It is also loosely equals to false.
// Your code here
console.log([] == false)
