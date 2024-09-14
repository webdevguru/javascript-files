class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent class constructor
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // Rex makes a sound.
myDog.bark();  // Rex barks.
