const numbers = [1, 2, 3, 5, 6];

const sum = numbers.reduce((accumulation, currentValue) => {
    return accumulation + currentValue;
}, 0); // Initial value of 0 for accumulation

console.log(sum); // Output: 17
