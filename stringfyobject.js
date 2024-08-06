// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Stringify Object
  let myString = JSON.stringify(person);
  
  // Display String
  document.getElementById("demo").innerHTML = myString;


  const fruits = {Bananas: 300, Oranges: 200, Apples: 500};

// একটি খালি স্ট্রিং তৈরি করা হচ্ছে
let text = "";

// অবজেক্টের কীগুলির নাম এবং মানের পেয়ার বের করতে Object.entries() ব্যবহার করা হচ্ছে
for (let [fruit, value] of Object.entries(fruits)) {
  // 'fruit' হলো কীগুলির নাম (যেমন 'Bananas', 'Oranges', 'Apples') এবং
  // 'value' হলো ঐ কীগুলির মান (যেমন 300, 200, 500)
  text += fruit + ": " + value + "<br>";  // প্রতিটি কীগুলির নাম এবং মান যুক্ত করা হচ্ছে এবং <br> যোগ করা হচ্ছে
}

// 'text' স্ট্রিংটি কনসোলে প্রিন্ট করা হচ্ছে (HTML ফরম্যাটে)
console.log(text);
