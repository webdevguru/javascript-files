// const numbers = [2, 3, 4, 5, 6, 67, 7, 8];
// const square = function (number) {
//     console.log(number * number);
//     return number*number;
// };

// numbers.forEach(square);  // This will print the squares of each number in the array

// const squarenumbers= numbers.map(square);
// console.log(squarenumbers);

const numbers =[2,4,5,67,7];
const abc =function abc(number) {
    console.log(number+numbers);
    return(number *number)
}
numbers.forEach(abc);
console.log(numbers.map(abc));
