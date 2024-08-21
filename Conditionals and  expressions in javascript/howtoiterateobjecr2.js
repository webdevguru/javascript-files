const key = "email"; // Key for the new property
const person = {
    name: "Sourav", // Property with a string value
    age: 27, // Property with a numeric value
    "person hobbies": ["guitar", "sleeping", "listening"], // Fixed typo: "peroson hobbies" to "person hobbies"
};

// console.log(Object.keys(person));
// const val =Array.isArray((Object.keys(person)));
// console.log(val);

for (const key of Object.keys (person))
     {
      console.log (person[key]);
      
     }

    
        
