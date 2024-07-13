let age = 27;

if (age >= 18) {
    console.log("You are an adult.");
}


let age = 17;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}



let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);  // Output: Wednesday




let age = 27;
let canVote = (age >= 18) ? "Yes" : "No";

console.log(canVote);  // Output: Yes




Logical Operators
Logical operators (&&, ||, !) are used to combine multiple conditions.

javascript
Copy code
let age = 27;
let isCitizen = true;

if (age >= 18 && isCitizen) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}



Examples of Expressions
Expressions are combinations of values, variables, operators, and functions that are evaluated to produce a result.

Arithmetic Expressions
javascript
Copy code
let x = 5;
let y = 10;
let sum = x + y;  // 15
let product = x * y;  // 50
String Expressions
javascript
Copy code
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"
Comparison Expressions
javascript
Copy code
let a = 5;
let b = 10;
let isEqual = (a == b);  // false
let isNotEqual = (a != b);  // true
let isGreater = (a > b);  // false
