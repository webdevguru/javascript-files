function sumOfDigits(number) {
    let sum = 0;
    
    while (number > 0) {
      let digit = number % 10; // Extract the last digit
      sum += digit;            // Add the digit to the sum
      number = Math.floor(number / 10); // Remove the last digit
    }
    
    return sum;
  }
  
  // Test cases
  console.log(sumOfDigits(1234)); // Output: 10
  console.log(sumOfDigits(9876)); // Output: 30
  console.log(sumOfDigits(0));    // Output: 0
  console.log(sumOfDigits(56));   // Output: 11
  
