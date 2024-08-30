const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

// Without destructuring
const name = person.name;
const age = person.age;
const city = person.city;

console.log(name); // 'Alice'
console.log(age); // 25
console.log(city); // 'New York'

// With destructuring
const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // 'Alice'
console.log(personAge); // 25
console.log(personCity); // 'New York'
