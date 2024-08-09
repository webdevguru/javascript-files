// Original arrays
let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];
console.log(array1, array2); // Print the original arrays

// Modify array1
array1.push("item3"); // Add "item3" to array1

// Clone array1 using the concat method
array2 = [].concat(array1); // Reassign array2 to a shallow copy of array1 using concat

// Alternatively, clone array1 using the spread operator
let array3 = [...array1];  // Create another shallow copy of array1 using the spread operator

// Modify array1 again
array1.push("item4");      // Add "item4" to array1

// Comparing the arrays
console.log(array1 == array2); // This will print false because array1 and array2 are different objects in memory
console.log(array1 == array3); // This will also print false because array1 and array3 are different objects in memory

// Printing the arrays
console.log(array1); // This will print ["item1", "item2", "item3", "item4"]
console.log(array2); // This will print ["item1", "item2", "item3"] because it was cloned before "item4" was added
console.log(array3); // This will print ["item1", "item2", "item3"] because it was cloned before "item4" was added

// If you want to add more items to a cloned array:
let array4 = array1.slice(0).concat(["item5", "item6"]); // Clone array1 using slice, then add "item5" and "item6"

console.log(array4); // This will print ["item1", "item2", "item3", "item4", "item5", "item6"]

// the most used technique to copy and create a empty arrayis you can use spread operator
