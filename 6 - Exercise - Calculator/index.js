class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Example usage:
const calc = new Calculator();
console.log("Add: ", calc.add(5, 3));        // 8
console.log("Subtract: ", calc.subtract(5, 3)); // 2
console.log("Multiply: ", calc.multiply(5, 3)); // 15
console.log("Divide: ", calc.divide(5, 3));     // 1.666...