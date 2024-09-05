function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        let innerVariable = "I'm inside!";
        console.log(outerVariable);  // Can access outerVariable because of lexical scope
    }

    innerFunction();  // Output: "I'm outside!"
    console.log(innerVariable);  // Error: innerVariable is not defined in outerFunction
}

outerFunction();
