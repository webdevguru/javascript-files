var obj = {
    Fname: 'John',
    age: 8,
    fun: function() {
        console.log(this.age); // here this is acting like a object 
        console.log(this.Fname); // here this is acting like a object 
         // this keyword is reference of object  if  you print this instead of  obj .Fname or Obj.age it will print  jhon  and age
    }
};

obj.fun(); // Logs 8
