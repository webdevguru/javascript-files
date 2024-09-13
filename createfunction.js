// //create functions to create multiple objects//
// const user = {
//     First_Name: "Sourav",
//     Last_Name: "Sanyal",
//     Email: "Sanyalsourav32@gmail.com",
//     age: 27,
//     address: "House Number, colony, pincode, state",
    
//     about: function () {
//         return `${this.First_Name} is ${this.age} years old His emial adress is ${this.Email} `;  // Use template literals correctly
//     },

//     is_18: function() {  
//         return this.age >= 18;
//     }
// };

// const about_user=user.about();
// console.log(about_user);

const user = {
    First_Name: "Sourav",
    Last_Name: "Sanyal",
    Email: "Sanyalsourav32@gmail.com",
    age: 27,
    address: "House Number, colony, pincode, state",
    
    about: function () {
        return `${this.First_Name} is ${this.age} years old. His email address is ${this.Email} and he lives at ${this.address}.`;
    },

    is_18: function() {  
        return this.age >= 18;
    }
};

// Change the address manually
user.address = "House Number 123, New Colony, Pincode 56789, State XYZ";

// Test the updated address in the about method
const about_user = user.about();
console.log(about_user);  // This will include the new address
