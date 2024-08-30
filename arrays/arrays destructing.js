const array=["value1","value2",1,2];
// let myvar1= array[0];
// let myvar2= array[1];
// console.log(`value of myvar is`, myvar1);
// console.log(`value of myvar is`, myvar2);
// in javascript we can acces our index by doing these following steps
// 1st we have to take a datatype which can be var ,let,const or anything
// 2nd step we have to follow take a 3rd bracket[] then set your index values which you want access [my var1 , my var2 ]
// then put a equal sign  to your to array from where you want access those values by their index 
// this is the short cut if we want access something in our javascript
// here i am showing my code  take a look of those lines
//let [myvar1, myvar2]=array;
// console.log(`value of myvar is`,myvar1);
// console.log(`value of myvar is`,myvar2);
// here i am going to talk about array destructuring
// suppose you have multiple values in your array and you want access those  values by their index but its almost impossible to create multiple values by their index
// so by destructing we can access them quickly
let [myvar1,myvar2,...sourav ]= array;// we are adding sourav as a array for storing the other values. 
console.log( `value of myvar`, myvar1)
console.log( `value of myvar`, myvar2)
console.log(sourav);



