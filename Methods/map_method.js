const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => {
    return number * number;
});

console.log(squares); // Output: [1, 4, 9, 16, 25]
//

let arun = ["singer","poet","dancer","Engineer"];

const   WhoIsArun =arun.map((role)=>{

    return role;
}
 
)
console.log(WhoIsArun);


const numbers = [2, 3, 4, 6, 7];

const square = function(number) {
  return number * number;
};

// Use map to apply the square function to each element of the array
// const squaredNumbers = 
// numbers.map(square);

// console.log(squaredNumbers);  // Output: [4, 9, 16, 36, 49]
console.log(numbers.map(square));



const numbers = [1,2,3,4,5,6,7];

const square = function(number) {
    return number * number; // Use 'number', the function parameter
  };
  

console.log(numbers.map(square));
