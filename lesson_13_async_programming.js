/* 
  ====================================================
  LESSON 13: Async JavaScript (Callbacks, Promises, Async/Await)
  ====================================================

  JavaScript is asynchronous by nature. Many operations such as:
  - fetching data from an API
  - reading files
  - waiting for timers
  - handling user events

  do not complete immediately, so JavaScript uses async patterns
  instead of blocking the main thread.

  Common async patterns:
  - Callbacks
  - Promises
  - Async/Await

  EXAMPLES:
*/

// Example 1: Callback Function
console.log('--- Example 1: Callback ---');
function greetAfterDelay(name, callback) {
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 1000);
}

greetAfterDelay('Alice', (message) => {
  console.log(message);
});

// Example 2: Promise
console.log('\n--- Example 2: Promise ---');
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: 'Sarah', email: 'sarah@example.com' };
      resolve(user);
    }, 1500);
  });
}

fetchUser().then((user) => {
  console.log('User fetched:', user);
}).catch((error) => {
  console.log('Error:', error.message);
});

// Example 3: Promise with Rejection
console.log('\n--- Example 3: Promise Rejection ---');
function fetchPost(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!postId) {
        reject(new Error('Post ID is required'));
        return;
      }
      resolve({ id: postId, title: 'JavaScript Basics' });
    }, 1000);
  });
}

fetchPost(101)
  .then((post) => console.log('Post loaded:', post))
  .catch((error) => console.log('Failed to load post:', error.message));

fetchPost()
  .then((post) => console.log('Unexpected success:', post))
  .catch((error) => console.log('Failed as expected:', error.message));

// Example 4: async/await
console.log('\n--- Example 4: async/await ---');
async function loadProfile() {
  try {
    const user = await fetchUser();
    console.log('Profile loaded for:', user.name);
  } catch (error) {
    console.log('Could not load profile:', error.message);
  }
}

loadProfile();

// Example 5: Multiple async calls
console.log('\n--- Example 5: Multiple async calls ---');
async function loadDashboard() {
  const [user, post] = await Promise.all([
    fetchUser(),
    fetchPost(42)
  ]);

  console.log('Dashboard data:', { user, post });
}

loadDashboard();

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ====================================================
  
  1. Create a function named `waitForMessage` that:
     - Takes a message and a delay in milliseconds
     - Returns a Promise that resolves after the delay with the message

  2. Create a function named `getWeather` that:
     - Returns a Promise
     - Resolves with an object like { city: 'Paris', temp: 22 }
     - Rejects with an Error if city is missing

  3. Create an async function named `displayWeather` that:
     - Calls `getWeather` and logs the result
     - Uses try/catch to handle errors

  4. Test these functions with:
     - valid city: 'Paris'
     - invalid city: ''

  5. Bonus: Create a `fetchUserData` function that:
     - Takes a userId
     - Returns a Promise
     - Resolves with a fake user object after a timeout
     - Rejects if userId is not a number

  Write your code below the TODO section. When you're ready, run:

    node lesson_13_async_programming.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

// 1. waitForMessage returns a Promise that resolves after delay
function waitForMessage(message, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// 2. getWeather resolves or rejects based on valid city
function getWeather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!city || city.trim() === '') {
        reject(new Error('City is required'));
        return;
      }

      resolve({ city, temp: 22 });
    }, 1000);
  });
}

// 3. displayWeather uses async/await with try/catch
async function displayWeather(city) {
  try {
    const weather = await getWeather(city);
    console.log(`Weather in ${weather.city}: ${weather.temp}°C`);
  } catch (error) {
    console.log('Weather error:', error.message);
  }
}

// 4. Testing valid and invalid weather requests
console.log('\n--- Practice: Weather Demo ---');
displayWeather('Paris');
displayWeather('');

// 5. Bonus: fetchUserData with validation
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof userId !== 'number' || Number.isNaN(userId)) {
        reject(new Error('User ID must be a number'));
        return;
      }

      resolve({
        id: userId,
        name: 'Alicia',
        email: 'alicia@example.com'
      });
    }, 1200);
  });
}

// Additional example use of the promise helpers
waitForMessage('This message arrives after 2 seconds', 2000)
  .then((msg) => console.log('waitForMessage result:', msg));

fetchUserData(7)
  .then((user) => console.log('Fetched user:', user))
  .catch((error) => console.log('User fetch failed:', error.message));

fetchUserData('abc')
  .then((user) => console.log('Unexpected success:', user))
  .catch((error) => console.log('Invalid user ID:', error.message));
