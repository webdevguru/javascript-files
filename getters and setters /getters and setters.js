const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName); // John Doe


const person = {
  firstName: 'John',
  lastName: 'Doe',
  set fullName(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
};

person.fullName = 'Jane Smith'; 
console.log(person.firstName); // Jane
console.log(person.lastName);  // Smith
