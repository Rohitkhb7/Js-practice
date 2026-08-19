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

// 4. Custom Error Class
class EmailError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmailError";
  }
}

// 1. validateEmail using custom EmailError
function validateEmail(email) {
  if (typeof email !== "string" || email.trim() === "") {
    throw new EmailError("Email cannot be empty.");
  }

  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    throw new EmailError("Email must contain an '@' symbol.");
  }

  const dotIndexAfterAt = email.indexOf(".", atIndex);
  if (dotIndexAfterAt === -1) {
    throw new EmailError("Email must contain a '.' after the '@' symbol.");
  }

  return true;
}

// 2. safeEmailValidator with try...catch
function safeEmailValidator(email) {
  try {
    return validateEmail(email);
  } catch (error) {
    console.error(`[Validation Failed for "${email}"]:`, error.message);
    return false;
  }
}

// 3. Testing validateEmail and safeEmailValidator
const testEmails = [
  "user@example.com", // Valid
  "userexample.com",  // No @
  "user@example",     // No dot after @
  ""                  // Empty
];

console.log("=== Testing validateEmail directly (with try/catch) ===");
testEmails.forEach((email) => {
  try {
    const result = validateEmail(email);
    console.log(`"${email}" -> Valid: ${result}`);
  } catch (err) {
    console.log(`"${email}" -> Caught ${err.name}: ${err.message}`);
  }
});

console.log("\n=== Testing safeEmailValidator ===");
testEmails.forEach((email) => {
  const isValid = safeEmailValidator(email);
  console.log(`"${email}" -> is valid:`, isValid);
});

// 5. retryOperation Function
function retryOperation(fn, maxRetries) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt} of ${maxRetries}...`);
      return fn(); // Returns the result if successful
    } catch (error) {
      console.warn(`Attempt ${attempt} failed: ${error.message}`);
      lastError = error;
    }
  }

  throw new Error(`Operation failed after ${maxRetries} retries. Last error: ${lastError?.message}`);
}

// Testing retryOperation
console.log("\n=== Testing retryOperation ===");

// Example 1: Operation that succeeds on attempt 3
let counter = 0;
const flakyTask = () => {
  counter++;
  if (counter < 3) {
    throw new Error("Temporary network glitch");
  }
  return "Data successfully fetched!";
};

try {
  const result = retryOperation(flakyTask, 4);
  console.log("Result:", result);
} catch (err) {
  console.error(err.message);
}

// Example 2: Operation that always fails
console.log("\n--- Always-failing task ---");
const alwaysFails = () => {
  throw new Error("Permanent server error 500");
};

try {
  retryOperation(alwaysFails, 3);
} catch (err) {
  console.error("Final outcome:", err.message);
}