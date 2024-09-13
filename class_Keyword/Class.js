class Animal{
    constructor(Age, Name)
    
    {
        this.Age=Age;
        this.Name=Name;
    }

    about()
    {
        return(`${this.Age},${this.Name}`);
        
    }
    isSupercuTe(){
        return this.age<1;
    }
    isCute()
    {
        return true;
    }


}
const animal = new Animal("Roger",2);
console.log(animal);

class Dog extends Animal
{

}

const tommy = new Dog ("tommy",3);
console.log(tommy);

