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
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

let displayNumber1 = "";
let displayNumber2 = "";
let num1 = NaN;
let num2 = NaN;
let operator = "";


const numbers = document.querySelectorAll(".number");
numbers.forEach(button => {
    button.addEventListener("click", () => {

        if (isNaN(num1)) {
            displayNumber1 += button.innerText;
            display.textContent = displayNumber1;
            num1 = parseFloat(displayNumber1);
        }

        else {
            displayNumber2 = displayNumber1;
            displayNumber2 += button.innerText;
            display.textContent = displayNumber2;
            num2 = parseFloat(button.innerText);
        }

        // displayNumber1 += button.innerText;
        // display.textContent = displayNumber1;
        //
        // if (isNaN(num1)) {
        //     num1 = parseFloat(displayNumber1);
        //     alert("num1 is now" + num1);
        // } else if (!isNaN(num1) && operator !== "") {
        //     num2 = parseFloat(button.innerText);
        //     alert("num2 is now" + num2);
        // }

        // Am un num1? Daca nu, il voi construi pana primesc un operator
        // Am un num1? Daca da, voi construi un al doilea numar pana la egal/operator

    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.innerText;

        if (isNaN(displayNumber1[displayNumber1.length - 1])) {
            displayNumber1 = displayNumber1.slice(0, -1) + operator;
        } else {
            displayNumber1 += operator;
        }

        display.textContent = displayNumber1;
    });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    console.log(num1)
    console.log(num2)
    console.log(operator)
    if (!isNaN(num1) && !isNaN(num2) && operator !== "") {
        displayNumber1 = eval(operator, num1, num2);
        num1 = parseFloat(displayNumber1);
        display.textContent = displayNumber1;
    }

})
