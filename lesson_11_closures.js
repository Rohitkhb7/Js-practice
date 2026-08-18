/* 
  ====================================================
  LESSON 11: Closures & Lexical Scope
  ====================================================

  A closure is a function that has access to variables from its outer
  (enclosing) scope, even after the outer function has finished executing.
  This happens because functions form closures around the data they need.

  Closures are created every time a function is created. They allow you to:
  - Create private variables that can only be accessed through specific methods
  - Create functions that "remember" values from their creation context
  - Build more complex patterns like callbacks and higher-order functions

  EXAMPLES:
*/

// Example 1: Basic Closure
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

console.log(sayHello('Alice'));  // "Hello, Alice!"
console.log(sayHi('Bob'));      // "Hi, Bob!"

// Example 2: Private Variables with Closures
function createCounter() {
  let count = 0;  // private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getCount());   // 1

// Example 3: Closure in a Loop
function createFunctions() {
  const functions = [];
  
  for (let i = 0; i < 3; i++) {
    functions.push(function() {
      return `Function ${i}`;
    });
  }
  
  return functions;
}

const funcs = createFunctions();
console.log(funcs[0]());  // "Function 0"
console.log(funcs[1]());  // "Function 1"
console.log(funcs[2]());  // "Function 2"

// Example 4: Module Pattern (Revealing Module Pattern)
const calculator = (function() {
  let result = 0;  // private variable

  return {
    add: function(x) {
      result += x;
      return this;
    },
    subtract: function(x) {
      result -= x;
      return this;
    },
    multiply: function(x) {
      result *= x;
      return this;
    },
    getResult: function() {
      return result;
    },
    reset: function() {
      result = 0;
      return this;
    }
  };
})();

console.log(calculator.add(5).multiply(2).subtract(3).getResult());  // 7

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ====================================================
  
  1. Create a function named `createBankAccount` that:
     - Takes an initial balance as a parameter
     - Returns an object with methods: deposit, withdraw, and getBalance
     - The balance should be a private variable (not accessible directly)
  
  2. Test your function by:
     - Creating an account with an initial balance of 1000
     - Depositing 500
     - Withdrawing 200
     - Logging the final balance
  
  3. Create a function named `createMultiplier` that:
     - Takes a number (multiplier) as a parameter
     - Returns a function that multiplies its input by that multiplier
     - Use this to create multipliers for 2, 3, and 5
  
  4. Test the multipliers by multiplying 10 by each one
  
  5. Bonus: Create a `createLogger` function that:
     - Keeps a log of all messages (private array)
     - Returns an object with methods to: add a message, get all logs, and clear logs
     - Each log entry should have a timestamp

  Write your code below the TODO section. When you're ready, run:

    node lesson_11_closures.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line
// 1. Bank Account Factory (Closure for private balance)
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
      }
      return balance;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
      } else {
        console.warn("Insufficient funds or invalid amount.");
      }
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

// 2. Test createBankAccount
const myAccount = createBankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Final Balance:", myAccount.getBalance()); // 1300


// 3. Multiplier Factory (Closure for multiplier)
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quintuple = createMultiplier(5);

// 4. Test Multipliers
console.log("10 * 2 =", double(10));     // 20
console.log("10 * 3 =", triple(10));     // 30
console.log("10 * 5 =", quintuple(10));  // 50


// 5. Bonus: Logger Factory (Closure for private logs array)
function createLogger() {
  let logs = [];

  return {
    add(message) {
      logs.push({
        message,
        timestamp: new Date().toISOString()
      });
    },
    getLogs() {
      // Returns a shallow copy to prevent external mutation
      return [...logs];
    },
    clear() {
      logs = [];
    }
  };
}

// Testing the Logger
const appLogger = createLogger();
appLogger.add("User logged in");
appLogger.add("Payment processed");
console.log("Logs:", appLogger.getLogs());

appLogger.clear();
console.log("Logs after clearing:", appLogger.getLogs()); // []