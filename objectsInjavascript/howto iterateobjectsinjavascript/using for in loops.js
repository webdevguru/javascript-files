const key = "email"; // Key for the new property
const person = {
    name: "Sourav", // Property with a string value
    age: 27, // Property with a numeric value
    "person hobbies": ["guitar", "sleeping", "listening"], // Fixed typo: "peroson hobbies" to "person hobbies"
};

//for in loop
// object .keys
for (let key in person) {
    
     console.log([key]);// Here we are printing keys 
        
    }

    // but if we want print  key with value pairs then we can use 
    for(let key in person)
    {
        console.log (key, person[key])
    }
