//finding an factorial of a given number.

let number = parseFloat(prompt("Enter Number:"));
let sum = 0;

// Function to find factorial
function getFactorial(num) {
  let factorial = 1; // Initialize factorial to 1
  for (let i = num; i >= 1; i--) { // Loop from the number down to 1
    factorial *= i; // Multiply factorial by the current number
  }
  return factorial; // Return the calculated factorial
}

console.log(getFactorial(number)); // Call the function and log the result
