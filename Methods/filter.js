// filter always return true or false
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Define the function to check if a number is even
const isEven = number => number % 2 === 0;

// Use the filter method with the isEven function
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8]
