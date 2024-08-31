const person = {
    name: "sourav",
    age: 22,
    "person hobbies": ["guitar", "sleeping"]
};

// Correct usage of Object.keys
console.log(Object.keys(person)); 

// Correct usage of Array.isArray with Object.keys
const val = Array.isArray(Object.keys(person));
console.log(val);
 
// Looping through the keys of the person object
for (let key of Object.keys(person)) {
    console.log(person[key]);
}
