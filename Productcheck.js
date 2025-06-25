const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

// Function to prompt user input
function askForInput() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    // Handle quit
    if (input.toLowerCase() === 'q') {
      if (numbers.length === 0) {
        console.log("No numbers entered. Exiting.");
        rl.close();
        return;
      }

      console.log("You entered:", numbers.join(", "));

      let conditionMet = false;

      // Check if product of any two numbers equals a third
      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          if (i !== j) {
            let product = numbers[i] * numbers[j];
            if (numbers.includes(product)) {
              console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${product}`);
              conditionMet = true;
              break;
            }
          }
        }
        if (conditionMet) break;
      }

      if (!conditionMet) {
        console.log("Condition was not met.");
      }

      rl.close();
      return;
    }

    // Validate input
    const num = parseInt(input);
    if (!isNaN(num)) {
      numbers.push(num);
      askForInput();
    } else {
      console.log("Invalid input. Please enter an integer or 'q' to quit.");
      askForInput();
    }
  });
}

askForInput();
