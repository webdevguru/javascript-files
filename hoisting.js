// hello();
// function hello() {
//     console.log("hello world");
// }

hello(); // This will cause a ReferenceError
let hello = function() {
    console.log("hello world");
};
