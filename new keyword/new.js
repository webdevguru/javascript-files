// Constructor function for CreateUser
function CreateUser(firstName, lastName, age, email) {
  this.First_Name = firstName;
  this.Last_Name = lastName;
  this.age = age;
  this.Email = email;
}

// Adding a prototype method for CreateUser
CreateUser.prototype.about = function() {
  return `${this.First_Name}, ${this.age}, ${this.Email}`;
};

// Creating instances of CreateUser
const user1 = new CreateUser("Sourav", "Sanyal", 27, "Sanyalsourav32@gmail.com");
const user2 = new CreateUser("John", "Doe", 30, "john.doe@example.com");

// Using the prototype method
console.log(user1.about()); // Outputs: "Sourav, 27, Sanyalsourav32@gmail.com"
console.log(user2.about()); // Outputs: "John, 30, john.doe@example.com"
