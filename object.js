const person = {
    age: 27,
    job: "Fullstack Web Developer",
    name: "Sourav Sanyal",
    degree: "B.Tech in Electronics"
};

// Object.entries() ব্যবহার করে কীগুলোর এবং মানগুলোর অ্যারে তৈরি করা হচ্ছে
const entries = Object.entries(person);

// অ্যারে থেকে কীগুলোর এবং মানগুলোর লুপ করা হচ্ছে
for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
