const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

console.log("Enter integers one by one. Type 'q' to finish.");

function askInput() {
  rl.question("Enter an integer (or 'q' to quit): ", function (input) {
    if (input.toLowerCase() === "q") {
      if (numbers.length === 0) {
        console.log("No numbers entered.");
        rl.close();
        return;
      }

      // Calculate mean
      const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

      // Calculate median
      const sorted = [...numbers].sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
      let median;
      if (sorted.length % 2 === 0) {
        median = (sorted[middle - 1] + sorted[middle]) / 2;
      } else {
        median = sorted[middle];
      }

      console.log(`Mean: ${mean}`);
      console.log(`Median: ${median}`);
      rl.close();
    } else {
      const num = parseInt(input);
      if (isNaN(num)) {
        console.log("Invalid input. Please enter an integer.");
      } else {
        numbers.push(num);
      }
      askInput();
    }
  });
}

askInput();
