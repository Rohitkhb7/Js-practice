/* 
  ====================================================
  LESSON 2: Basic Arithmetic, Modulo & Template Literals
  ====================================================

  Arithmetic operators let you perform calculations on numbers:
  - `+` addition
  - `-` subtraction
  - `*` multiplication
  - `/` division
  - `%` modulo (remainder)
  - `+=`, `-=`, `*=`, `/=` compound assignment operators

  The modulo operator `%` returns the remainder after division. It's useful
  for tasks like checking even/odd numbers (`n % 2 === 0` means even).

  Template literals (strings wrapped in backticks ``) allow interpolation:
  use `${expression}` inside the string to embed values.

  Operator precedence: multiplication and division run before addition and
  subtraction. Use parentheses `()` to control evaluation order.

  EXAMPLES:
*/

const a = 10;
const b = 3;

// Basic arithmetic
const sum = a + b;        // 13
const difference = a - b; // 7
const product = a * b;    // 30
const quotient = a / b;   // 3.333...
const remainder = a % b;  // 1

// Compound assignment
let counter = 0;
counter += 5; // now 5
counter *= 2; // now 10

// Template literals
const message = `When we add ${a} and ${b} we get ${sum}.`;
console.log(message);
console.log(`${a} divided by ${b} is approximately ${quotient}`);
console.log(`${a} % ${b} = ${remainder}`);

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare `const x = 7` and `let y = 4`.
  2. Create variables for `sum`, `product`, and `remainder` using `x` and `y`.
  3. Use a template literal to log: "The sum of X and Y is SUM" (with values).
  4. Increase `y` by 3 using `+=` and log the new `y`.
  5. Compute `divided = x / y` after the increase and log a message using a
     template literal that rounds `divided` to two decimal places.

  Write your answers below in the section marked `TODO`. When you finish,
  run `node lesson_02_operators.js` and paste your results or tell me it's done.
*/

// TODO: Write your code below this line
// 1
const x = 7;
let y = 4;

//2
const total = x + y; 
const mul = x * y; 
const remain = x % y;

//3
console.log(`The sum of ${x} and ${y} is ${total}`);

//4
y += 3
console.log(y);

//5
const divided = x/y
console.log(`Divided value rounded: ${divided.toFixed(2)}`);;


