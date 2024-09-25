function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

const display = document.querySelector("#display");


function eval(operator, num1, num2) {
    switch (operator) {
        case "+":
            display.innerHTML = add(num1, num2);
            return num1 + num2;
        case "-":
            display.innerHTML = subtract(num1, num2);
            return num1 - num2;
        case "*":
            display.innerHTML = multiply(num1, num2);
            return num1 * num2;
        case "/":
            display.innerHTML = divide(num1, num2);
            return num1 / num2;
    }
}

let displayNumber = "";
let num1 = NaN;
let num2 = 0;
let operator = "";
//let operator = ["+", "-", "*", "/"]


const numbers = document.querySelectorAll(".number");
numbers.forEach(button => {
    button.addEventListener("click", () => {
        displayNumber += button.innerText;
        display.textContent = displayNumber;

        if (isNaN(num1)) {
            num1 = parseFloat(displayNumber);
        }

    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {
    button.addEventListener("click", () => {
        if (!isNaN(num1)) {
            operator = button.innerText;
            displayNumber += operator;
            display.textContent = displayNumber;
        }
    })
})
