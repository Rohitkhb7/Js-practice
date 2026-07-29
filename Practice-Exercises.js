/**
 * JAVASCRIPT PRACTICE EXERCISES
 * =============================
 * 
 * Complete all exercises in this file
 * These exercises cover all the lessons
 * 
 * Instructions:
 * 1. Read each exercise carefully
 * 2. Write your solution code in the designated area
 * 3. Test your code using console.log()
 * 4. Move to the next exercise once working
 */

// ============ LEVEL 1: BASICS (Lessons 1-3) ============

// EXERCISE 1.1: Create Variables
// TODO: Create three variables: name (string), age (number), isStudent (boolean)
let name = ""; // your name here
let age = 0;   // your age here
let isStudent = false; // true or false

// EXERCISE 1.2: Data Types
// TODO: Identify what type each variable is
let var1 = 42;
let var2 = "hello";
let var3 = true;
let var4 = undefined;

console.log(typeof var1);      // TODO: What is this?
console.log(typeof var2);      // TODO: What is this?
console.log(typeof var3);      // TODO: What is this?
console.log(typeof var4);      // TODO: What is this?

// EXERCISE 1.3: Simple Calculation
// TODO: Calculate the area of a rectangle given width=5 and height=10
let width = 5;
let height = 10;
let area = 0; // TODO: Calculate area (width × height)

console.log(`Area: ${area}`);

// EXERCISE 1.4: String Comparison
// TODO: Check if the password is correct
let correctPassword = "secret123";
let userPassword = "secret123";

if (userPassword === correctPassword) {
  // TODO: What should be logged here?
}

// EXERCISE 1.5: Age Category
// TODO: Determine age category (child, teen, adult, senior)
let personAge = 25;

if (personAge < 13) {
  // TODO: log "Child"
} else if (personAge < 18) {
  // TODO: log "Teen"
} else if (personAge < 65) {
  // TODO: log "Adult"
} else {
  // TODO: log "Senior"
}

// ============ LEVEL 2: LOOPS & FUNCTIONS (Lessons 4-5) ============

// EXERCISE 2.1: Count from 1 to 5
// TODO: Use a for loop to print numbers 1 to 5
for (let i = 0; i < 0; i++) {  // TODO: Fix the condition
  console.log(i);
}

// EXERCISE 2.2: Sum of Numbers
// TODO: Calculate sum of numbers from 1 to 10 using a loop
let sum = 0;
// TODO: Add the loop here

console.log(`Sum: ${sum}`);

// EXERCISE 2.3: Times Table
// TODO: Create a function that prints multiplication table for a number
function multiplicationTable(num) {
  // TODO: Use a loop to print num × 1, num × 2, ... num × 10
}

multiplicationTable(5); // Should print 5×1=5, 5×2=10, etc.

// EXERCISE 2.4: Temperature Converter
// TODO: Create a function that converts Celsius to Fahrenheit
// Formula: F = (C × 9/5) + 32
function celsiusToFahrenheit(celsius) {
  // TODO: Return the converted temperature
  return 0;
}

console.log(celsiusToFahrenheit(0));   // Should be 32
console.log(celsiusToFahrenheit(100)); // Should be 212

// EXERCISE 2.5: Even or Odd
// TODO: Create a function that determines if a number is even or odd
function isEven(number) {
  // TODO: Return true if even, false if odd
  return false;
}

console.log(isEven(4));   // true
console.log(isEven(7));   // false
console.log(isEven(20));  // true

// EXERCISE 2.6: Factorial
// TODO: Create a function that calculates factorial of a number
// Example: factorial(5) = 5 × 4 × 3 × 2 × 1 = 120
function factorial(n) {
  // TODO: Calculate and return factorial
  return 0;
}

console.log(factorial(5));  // 120
console.log(factorial(3));  // 6

// ============ LEVEL 3: ARRAYS (Lesson 6) ============

// EXERCISE 3.1: Array Basics
// TODO: Create an array of 5 colors
let colors = [];

// TODO: Print the first color
console.log(colors[0]);

// TODO: Print the last color
console.log(colors[colors.length - 1]);

// EXERCISE 3.2: Array Methods
// TODO: Create an array and use push, pop, shift, unshift
let fruits = ["apple", "banana"];

// TODO: Add "orange" to the end
// TODO: Remove the last item
// TODO: Add "mango" to the beginning
// TODO: Remove the first item

console.log(fruits);

// EXERCISE 3.3: Find Largest Number
// TODO: Create a function that finds the largest number in an array
function findLargest(arr) {
  // TODO: Return the largest number
  return 0;
}

console.log(findLargest([5, 2, 8, 1, 9])); // 9
console.log(findLargest([10, 20, 15]));    // 20

// EXERCISE 3.4: Filter Even Numbers
// TODO: Create a function that filters even numbers from an array
function getEvenNumbers(arr) {
  // TODO: Return array with only even numbers
  return [];
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// EXERCISE 3.5: Count Occurrences
// TODO: Create a function that counts how many times an item appears in array
function countOccurrences(arr, item) {
  // TODO: Count and return occurrences
  return 0;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); // 3
console.log(countOccurrences(["a", "b", "a", "c", "a"], "a")); // 3

// ============ LEVEL 4: OBJECTS (Lesson 7) ============

// EXERCISE 4.1: Create an Object
// TODO: Create a student object with properties: name, age, grade
let student = {
  // TODO: Add properties here
};

// TODO: Print student name and grade

// EXERCISE 4.2: Object Methods
// TODO: Create a calculator object with add, subtract, multiply methods
let calculator = {
  // TODO: Add methods here
};

console.log(calculator.add(5, 3));       // Should be 8
console.log(calculator.subtract(5, 3));  // Should be 2
console.log(calculator.multiply(5, 3));  // Should be 15

// EXERCISE 4.3: Array of Objects
// TODO: Create an array of 3 books with title, author, pages
let books = [
  // TODO: Add book objects here
];

// TODO: Loop through and print each book's info

// EXERCISE 4.4: Find Student
// TODO: Create an array of students and find one by name
let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" }
];

function findStudent(studentList, name) {
  // TODO: Find and return student by name
  return null;
}

console.log(findStudent(students, "Bob")); // Should return Bob's object

// ============ LEVEL 5: STRINGS (Lesson 8) ============

// EXERCISE 5.1: String Methods
// TODO: Use string methods to:
let text = "Hello JavaScript";

// 1. Convert to lowercase
console.log(text.toLowerCase());

// 2. Get first 5 characters
console.log(text.substring(0, 5));

// 3. Check if it includes "Java"
console.log(text.includes("Java"));

// 4. Replace "JavaScript" with "Python"
console.log(text.replace("JavaScript", "Python"));

// EXERCISE 5.2: Email Validator
// TODO: Create a function that validates email (must contain @)
function isValidEmail(email) {
  // TODO: Check if email is valid
  return false;
}

console.log(isValidEmail("john@example.com"));  // true
console.log(isValidEmail("johnexample.com"));   // false

// EXERCISE 5.3: Username Validator
// TODO: Create a function that validates username:
// - Must be at least 3 characters
// - Must not contain spaces
function isValidUsername(username) {
  // TODO: Add validation logic
  return false;
}

console.log(isValidUsername("john"));       // false (too short)
console.log(isValidUsername("jo"));         // false (too short)
console.log(isValidUsername("john doe"));   // false (has space)
console.log(isValidUsername("johndoe"));    // true

// EXERCISE 5.4: Reverse String
// TODO: Create a function that reverses a string
function reverseString(str) {
  // TODO: Return reversed string
  return "";
}

console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("world"));      // "dlrow"

// EXERCISE 5.5: Capitalize First Letter
// TODO: Create a function that capitalizes first letter of each word
function capitalizeWords(text) {
  // TODO: Return text with first letter of each word capitalized
  return "";
}

console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javascript is fun")); // "Javascript Is Fun"

// ============ CHALLENGE EXERCISES ============

// CHALLENGE 1: Simple To-Do List
// TODO: Create an object that manages a to-do list
let todoList = {
  tasks: [],
  
  // TODO: Add addTask method
  
  // TODO: Add removeTask method
  
  // TODO: Add listTasks method
};

todoList.addTask("Buy groceries");
todoList.addTask("Complete homework");
todoList.listTasks(); // Should show both tasks
todoList.removeTask("Buy groceries");
todoList.listTasks(); // Should show only homework

// CHALLENGE 2: Grade Calculator
// TODO: Create a function that calculates grade based on score
function getGrade(score) {
  // 90-100: A
  // 80-89: B
  // 70-79: C
  // 60-69: D
  // Below 60: F
  
  // TODO: Return appropriate grade
  return "";
}

console.log(getGrade(95));  // A
console.log(getGrade(85));  // B
console.log(getGrade(75));  // C
console.log(getGrade(55));  // F

// CHALLENGE 3: Bank Account Simulator
// TODO: Create a bank account object with deposit, withdraw, getBalance
let account = {
  balance: 1000,
  
  // TODO: Add methods here
};

account.deposit(500);       // Balance becomes 1500
account.withdraw(200);      // Balance becomes 1300
console.log(account.getBalance()); // 1300

// CHALLENGE 4: Shopping Cart
// TODO: Create a shopping cart system
let cart = {
  items: [],
  
  // TODO: addItem(name, price, quantity)
  // TODO: removeItem(name)
  // TODO: getTotal()
  // TODO: listItems()
};

cart.addItem("Laptop", 999, 1);
cart.addItem("Mouse", 29, 2);
cart.listItems();
console.log(cart.getTotal()); // Should be 1057

// ============ SUBMISSION TIPS ============

// When you complete these exercises:
// 1. Make sure all console.log() outputs look correct
// 2. Test with different inputs
// 3. Check for edge cases (empty arrays, negative numbers, etc.)
// 4. Add comments to explain your code
// 5. Don't copy answers from the internet - understand the logic!

// ============ ANSWER CHECKING ============

// To check your answers:
// 1. Open this file in VS Code
// 2. Right-click and select "Run in Terminal"
// 3. Or use: node Exercises.js
// 4. Check if the outputs match expected results

// GOOD LUCK! 💪
