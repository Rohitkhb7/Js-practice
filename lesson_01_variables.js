/* 
  ====================================================
  LESSON 1: Variables & Primitive Types
  ====================================================

  In JavaScript, variables are containers for storing data values. Use `let` when a
  variable's value will change, and `const` when the value should stay the same.
  (Avoid using `var` for modern code; `let` and `const` are block-scoped and safer.)

  Primitive types are the simplest data values in JavaScript. The most common
  primitive types are:
  - `string`  : text, e.g. "hello"
  - `number`  : numeric values, e.g. 42 or 3.14
  - `boolean` : true or false
  - `null`    : intentional absence of any object value
  - `undefined`: a variable that has been declared but not assigned a value
  - `symbol`  : a unique identifier (advanced; rarely needed for beginners)

  Key rules:
  - Prefer `const` by default; use `let` only when you expect reassignment.
  - JavaScript is dynamically typed: a variable can hold any type, but it's
    helpful to think about what type you intend to store.

  EXAMPLES:
*/

// Strings
const greeting = 'Hello';
let name = "Ada";

// Numbers
let age = 30; // numeric
const pi = 3.14159;

// Booleans
const isStudent = true;

// null vs undefined
let unknown = null; // intentionally empty
let notAssigned;     // undefined

// You can reassign `let` variables:
age = age + 1; // now 31

// But reassigning a `const` will throw an error if you try:
// greeting = 'Hi'; // Uncaught TypeError: Assignment to constant variable.

console.log('greeting:', greeting);
console.log('name:', name);
console.log('age:', age);
console.log('isStudent:', isStudent);
console.log('unknown (null):', unknown);
console.log('notAssigned (undefined):', notAssigned);

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare a `const` named `fullName` and set it to your full name (a string).
  2. Declare a `let` named `yourAge` and set it to your age (a number).
  3. Declare a `let` named `isLearningJS` and set it to `true` or `false`.
  4. Declare a variable named `favoriteColor` and initialize it to `null`.
  5. Increase `yourAge` by 1 (simulate a birthday) using the `+=` operator.
  6. Log all variables to the console in a readable way.

  Write your answers below in the section marked `TODO`. When you're ready,
  either paste your code back here or tell me you've solved it. I will review
  your submission and then create the next lesson if everything is correct.
*/

// TODO: Write your code below this line

const fullName = "Rohit Kumar Kushwaha";

let yourAge = 22;

let isLearningJS = true;

let favoriteColor = null;
yourAge += 1; // now 23

// 6. console.log the values
console.log('fullName:', fullName);
console.log('yourAge:', yourAge);
console.log('isLearningJS:', isLearningJS);
console.log('favoriteColor:', favoriteColor);