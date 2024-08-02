let winning_number = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winning_number) {
    console.log("Your Guess is Right");
} else {
    console.log("Your guess is wrong");
}
