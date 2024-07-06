const readlineSync = require('readline-sync');

function guessNumber(secretNumber) {
  let guess;
  let attempts = 0;

  do {
    guess = parseInt(readlineSync.question("Guess the secret number between 1 and 10: "), 10);
    attempts++;
  } while (guess !== secretNumber);

  return attempts;
}

// Example usage
const secretNumber = 7; // Set the secret number
const attempts = guessNumber(secretNumber);
console.log(`You guessed the number in ${attempts} attempts.`);
