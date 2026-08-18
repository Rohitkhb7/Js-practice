/* 
  ====================================================
  LESSON 12: Error Handling & Try/Catch/Finally
  ====================================================

  Error handling is a critical part of writing robust JavaScript code.
  It allows you to gracefully handle errors instead of letting your
  program crash.

  Types of errors in JavaScript:
  - SyntaxError: Code is syntactically incorrect
  - ReferenceError: Variable or function doesn't exist
  - TypeError: Wrong type of value or invalid operation
  - RangeError: Value is out of valid range
  - Error: Generic error object

  The try...catch...finally statement:
  - try: Code that might throw an error
  - catch: Handle the error if one occurs
  - finally: Code that runs regardless (optional)

  EXAMPLES:
*/

// Example 1: Basic Try/Catch
console.log('--- Example 1: Basic Try/Catch ---');
try {
  const result = riskyFunction();
  console.log(result);
} catch (error) {
  console.log('An error occurred:', error.message);
}

function riskyFunction() {
  throw new Error('Something went wrong!');
}

// Example 2: Catching Different Types of Errors
console.log('\n--- Example 2: Different Error Types ---');
try {
  // This will throw a TypeError
  const obj = null;
  obj.method();
} catch (error) {
  if (error instanceof TypeError) {
    console.log('TypeError caught:', error.message);
  } else {
    console.log('Other error:', error.message);
  }
}

// Example 3: Try/Catch/Finally
console.log('\n--- Example 3: Try/Catch/Finally ---');
function openFile() {
  try {
    console.log('Opening file...');
    throw new Error('File not found');
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('Cleaning up resources (finally always runs)');
  }
}

openFile();

// Example 4: Creating Custom Errors
console.log('\n--- Example 4: Custom Errors ---');
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new ValidationError('Age must be between 0 and 150');
  }
  return `Valid age: ${age}`;
}

try {
  console.log(validateAge(25));
  console.log(validateAge(-5));
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation Error: ${error.message}`);
  }
}

// Example 5: Error Handling in Functions
console.log('\n--- Example 5: Error Handling in Functions ---');
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function safeDivide(a, b) {
  try {
    return divide(a, b);
  } catch (error) {
    console.log('Error caught in safeDivide:', error.message);
    return null;
  }
}

console.log(safeDivide(10, 2));   // 5
console.log(safeDivide(10, 0));   // Error caught, returns null

// Example 6: Throwing Errors Based on Conditions
console.log('\n--- Example 6: Conditional Error Throwing ---');
function processUser(user) {
  if (!user) {
    throw new Error('User cannot be null');
  }
  if (!user.name) {
    throw new Error('User must have a name');
  }
  if (user.age < 18) {
    throw new Error('User must be 18 or older');
  }
  return `User ${user.name} is valid`;
}

try {
  console.log(processUser({ name: 'Alice', age: 25 }));
  console.log(processUser({ name: 'Bob', age: 15 }));
} catch (error) {
  console.log('Validation error:', error.message);
}

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ====================================================
  
  1. Create a function named `validateEmail` that:
     - Takes an email string as a parameter
     - Throws an error if email is empty
     - Throws an error if email doesn't contain '@' symbol
     - Throws an error if email doesn't contain '.' after '@'
     - Returns true if email is valid
  
  2. Create a function named `safeEmailValidator` that:
     - Calls validateEmail in a try block
     - Catches errors and logs them
     - Returns true if valid, false if invalid
  
  3. Test both functions with:
     - Valid email: 'user@example.com'
     - Invalid email (no @): 'userexample.com'
     - Invalid email (no dot): 'user@example'
     - Empty email: ''
  
  4. Create a custom error class called `EmailError` that extends Error
     - Use it in validateEmail instead of generic Error
  
  5. Create a function named `retryOperation` that:
     - Takes a function and a maximum number of retries
     - Tries to execute the function
     - If it fails, retries up to the max number of times
     - Logs each attempt
     - Throws an error if all retries fail

  Write your code below the TODO section. When you're ready, run:

    node lesson_12_error_handling.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line
