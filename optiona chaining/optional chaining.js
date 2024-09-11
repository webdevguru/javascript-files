const user = {
    firstname: "sourav",
    lastname: "sanyal",
    address: { houseeNumber: '688/1,Ashoknagar' },
    Degree: "Electronics and Communication Engineering",
    profession: "Mern stack Developer",
    Father_name: "Malay Ranjan sanayal",
    Mother_name: "Minu sanyal",
    Elder_Brother_Name: "Sudipto Sanyal",
    Grand_Father_Name: "Nihar ranjan sanyal",
    Grand_Mother_Name: "Mira Sanyal",
    Great_Grand_Father_Name: "Rajnai Ranjan sanyal",
    Great_Grand_Mother_Name: "Ganoda_Sundori_ Devi",
}

console.log(user.firstname);
console.log(user.lastname);
console.log(user.address.houseeNumber);
console.log(user.Degree);
console.log(user.profession);
console.log(user.Father_name);
console.log(user.Mother_name);
console.log(user.Elder_Brother_Name);
console.log(user.Grand_Father_Name);
console.log(user.Grand_Mother_Name);
console.log(user.Great_Grand_Father_Name);
console.log(user.Great_Grand_Mother_Name);








const user = {
    firstname: "Sourav",
    lastname: "Sanyal",
    address: { houseNumber: '688/1,Ashoknagar' },
    Degree: "Electronics and Communication Engineering",
    profession: "Mern Stack Developer",    
    Father_name: "Malay Ranjan Sanyal",
    Mother_name: "Minu Sanyal",
    Elder_Brother_Name: "Sudipto Sanyal",
    Grand_Father_Name: "Nihar Ranjan Sanyal",
    Grand_Mother_Name: "Mira Sanyal",
    Great_Grand_Father_Name: "Rajnai Ranjan Sanyal",
    Great_Grand_Mother_Name: "Ganoda Sundori Devi",
}

// Example with existing properties
console.log(user?.firstname); // Output: "Sourav"
console.log(user?.lastname);  // Output: "Sanyal"
console.log(user?.address?.houseNumber); // Output: "688/1,Ashoknagar"

// Example with non-existing properties (won't throw an error)
console.log(user?.middleName); // Output: undefined
console.log(user?.address?.zipCode); // Output: undefined

// Optional chaining in nested properties
console.log(user?.address?.houseNumber); // Output: "688/1,Ashoknagar"
console.log(user?.address?.streetName); // Output: undefined




