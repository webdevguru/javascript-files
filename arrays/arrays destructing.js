const numbers = [1, 2, 3, 4, 5];

// Destructure the first two values from the array
const [first, second] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
//You can also skip values and use the rest operator to capture the remaining elements:

const [first, , third, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(third);  // Output: 3
console.log(rest);   // Output: [4, 5]


