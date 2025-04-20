// language=javascript
export const jsCodeFunction = `
// Simple greeting function
function greet(name) {
  return \`Hello, \${name}!\`;
}`;

// language=javascript
export const jsCodeArrow = `
// Sum of two numbers
const sum = (a, b) => a + b;`;

// language=javascript
export const jsCodeAsync = `
/**
 * Fetches JSON data from the given URL
 * @param {string} url
 */
async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}`;

// language=javascript
export const jsCodeClass = `
/**
 * Person class represents a user with a name
 */
class Person {
  constructor(name) {
    this.name = name; // Store name
  }

  speak() {
    console.log(\`Hi, I'm \${this.name}\`); // Log greeting
}
}`;

// language=javascript
export const jsCodeModule = `
// Entry point
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`;

// language=javascript
export const jsCodeIIFE = `
  // Immediately invoked function expression
  (function () {
    console.log('Immediately invoked');
  })();`;

// language=javascript
export const jsCodeEvent = `
// Button click handler
document.getElementById('btn').addEventListener('click', () => {
  alert('Clicked!');
});`;

// language=javascript
export const jsCodeDestructuring = `
/**
 * Extracts name and age from user object
 */
const user = { name: 'Max', age: 29 };
const { name, age } = user;`;

// language=javascript
export const jsCodeTryCatch = `
try {
  // Risky operation
  riskyOperation();
} catch (error) {
  // Error handler
  console.error('Something went wrong:', error);
}`;

// language=javascript
export const jsCodeMapFilter = `
// Doubles even numbers
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0).map(n => n * 2);`;
