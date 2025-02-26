/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50 ) {
    console.log("more than fifty")
}
else {
    console.log(randomNumber)
}
// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0){
    console.log(randomNumber)
    console.log("Num is even")
}
else {
    console.log(randomNumber)
    console.log("Num is odd")
}
// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 5 === 0 && randomNumber % 3 == 0){
    console.log("fizzbuzz")
} else if (randomNumber % 5 === 0) {
    console.log("buzz")
} else if (randomNumber % 3 === 0) {
    console.log("fizz")
} else {
    console.log(randomNumber)
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = (randomNumber % 2 === 0) ? "Even" : "Odd"
console.log("toDisplay",toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: You use switch statement to compare an expression/variable to specific values/cases

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let num =  1; num <= n; num++){
    console.log(num)
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
console.log("While loop")
let x = 0
while (x < list.length) {
    console.log(list[x])
    x++
}
// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: Put the 'do' keyword on top; then, put some statements; lastly, put the 'while' keyword and the condition

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("For of loop")
for (const element of list) {
    console.log(element)
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("For in loop")
for (fruits in list) {
    console.log(list[fruits])
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("For each loop")
list.forEach((abc) => console.log(abc))
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer:
// -We use forEach loop when we want to process all elements in an array
// -We use for of loop when we want to iterate through the values of an iterable
// -We use for in loop when we want to iterate through the keys of an object

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    const quotient = numerator / denominator;
    if(denominator === 0) {
        throw Error("Division by zero error")
    }
    console.log("Quotient = " + quotient)
} catch (error) {
    console.log("ERROR");
} finally {
    console.log("cleaning up resources")
}
