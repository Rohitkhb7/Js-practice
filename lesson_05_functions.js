/* 
  ====================================================
  LESSON 5: Functions (Declarations, Arrow Functions & Return values)
  ====================================================

  A function is a reusable block of code that performs a task. You can define
  functions in two common ways:
  - function declaration
  - arrow function

  A function can accept input values called parameters and can return a value
  using the `return` keyword. If a function does not return a value explicitly,
  it returns `undefined`.

  EXAMPLES:
*/

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Rohit'));

// Arrow function
const add = (x, y) => {
  return x + y;
};
console.log('5 + 3 =', add(5, 3));

// Short arrow function with implicit return
const multiply = (x, y) => x * y;
console.log('4 * 2 =', multiply(4, 2));

// Function with no return
function sayHi() {
  console.log('Hi there');
}
sayHi();

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare a function named `square` that takes one parameter and returns
     that value multiplied by itself.
  2. Declare an arrow function named `isEven` that returns `true` when the
     input number is even, and `false` otherwise.
  3. Declare a function named `describeAge` that accepts `age` and returns
     a string like `"You are AGE years old"`.
  4. Call each function and log the results to the console.

  Add your solution below in the TODO section. When you're ready, run:

    node lesson_05_functions.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

// 1
function square(para1){
  return para1*para1;
}

// 2. 
const isEven = (num)=> num % 2 === 0;
// 3. 
function describeAge(age){
  return `You are ${age} years old`;
}

// 4. 
console.log(square(5))
console.log(isEven(4))
console.log(describeAge(22))