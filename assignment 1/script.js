// Prompt the user to enter the first number
let num1 = prompt("Enter the first number:");

// Prompt the user to enter the second number
let num2 = prompt("Enter the second number:");

// Prompt the user to choose an operator
let operator = prompt("Enter an operator (+, -, *, /):");

// Convert the inputs to numbers
num1 = Number(num1);
num2 = Number(num2);

// Check if inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
} else {
    // Perform the operation based on the chosen operator
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        // Check for division by zero
        if (num2 === 0) {
            alert("Division by zero is not allowed.");
        } else {
            result = num1 / num2;
        }
    } else {
        alert("Please enter a valid operator (+, -, *, /).");
    }

    // If a valid result exists, display it
    if (result !== undefined) {
        alert(`The result of ${num1} ${operator} ${num2} is ${result}.`);
    }
}