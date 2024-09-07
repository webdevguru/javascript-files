// accessing function elements by using for each method
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

const Fruits = ['apple', 'mango',"nuts"];

 Fruits.forEach((Fruits)=>{
    console.log(Fruits);
    
 });

 const numbers2 = [1, 2, 3, 4, 5];

function printNumber(number) {
    console.log(number);
}

numbers.forEach(printNumber);
