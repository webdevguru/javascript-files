const person1=[
    {firstname:"sourav",
      lastName:"sanyal",
      age: 27,
    }

]
const person2=[

    {firstname:"Gourav",
        lastName:"Chaube",
        age: 16,
      }
]

// Check if age is greater than or equal to 18 (legal adult age for example)
const isAdultPerson1 = person1.filter(person => person.age >= 18);
const isAdultPerson2 = person2.filter(person => person.age >= 18);

console.log("Person1 (Adult):", isAdultPerson1);  // Will include Sourav
console.log("Person2 (Adult):", isAdultPerson2);  // Will exclude Gourav