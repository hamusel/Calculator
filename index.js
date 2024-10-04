function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error, please press A/C";
    }
    return Math.round(a / b * 100000) / 100000;
}

function subtract(a, b) {
    return a - b;
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
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

function calculatePercent(num1) {
    return num1 / 100;
}

let buildingNumber1 = "";
let buildingNumber2 = "";
let displayOnCalculator = ""
let num1 = 0;
let num2 = NaN;
let operator = "";
let twoNumbers = false;


const numbers = document.querySelectorAll(".number");
numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (displayOnCalculator !== "Error, please press A/C") {
            if (operator === "") {
                buildingNumber1 += button.innerText;
                displayOnCalculator = buildingNumber1;
                display.textContent = displayOnCalculator;
                num1 = parseFloat(buildingNumber1);
            } else {
                buildingNumber2 += button.innerText;
                displayOnCalculator += button.innerText;
                display.textContent = displayOnCalculator;
                num2 = parseFloat(buildingNumber2);
                twoNumbers = true;
            }


        }
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach(btn => {
    btn.addEventListener("click", () => {
        if (twoNumbers) {
            displayOnCalculator = eval(operator, num1, num2);
            if (isFloat(displayOnCalculator)) {
                num1 = parseFloat(displayOnCalculator);
                num2 = NaN;
                buildingNumber1 = num1.toString();
                buildingNumber2 = "";
                twoNumbers = false;
                operator = "";
                display.textContent = displayOnCalculator;
            } else {
                buildingNumber1 = "";
                buildingNumber2 = "";
                num1 = 0;
                num2 = NaN;
                operator = "";
                twoNumbers = false;
                display.textContent = displayOnCalculator;
            }

        }

        if (!twoNumbers && displayOnCalculator !== "Error, please press A/C") {
            operator = btn.innerText;
            if (displayOnCalculator[displayOnCalculator.length - 1] === "+" ||
                displayOnCalculator[displayOnCalculator.length - 1] === "-" ||
                displayOnCalculator[displayOnCalculator.length - 1] === "*" ||
                displayOnCalculator[displayOnCalculator.length - 1] === "/") {
                displayOnCalculator = displayOnCalculator.slice(0, -1) + operator;
            } else {
                displayOnCalculator += operator;
            }
            display.textContent = displayOnCalculator;
        }

    })
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (twoNumbers && displayOnCalculator !== "Error, please press A/C") {
        twoNumbers = false;
        displayOnCalculator = eval(operator, num1, num2);
        num1 = parseFloat(displayOnCalculator);
        display.textContent = displayOnCalculator;
        num2 = NaN;
        buildingNumber1 = num1.toString();
        buildingNumber2 = "";
        operator = "";
    }

})

const ac = document.querySelector("#AC");
ac.addEventListener("click", () => {
    buildingNumber1 = "";
    buildingNumber2 = "";
    displayOnCalculator = "0"
    num1 = 0;
    num2 = NaN;
    operator = "";
    twoNumbers = false;
    display.textContent = displayOnCalculator;
})

const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    let positive = !num1.toString().startsWith("-");
    positive = !positive;
    if (!twoNumbers && displayOnCalculator !== "Error, please press A/C") {
        buildingNumber1 = !positive ? "-" + buildingNumber1 : buildingNumber1.replace("-", "");
        displayOnCalculator = buildingNumber1;
        num1 = parseFloat(displayOnCalculator);
        display.textContent = displayOnCalculator;
    }

    console.log("positive " + positive + " " + "bn1 " + buildingNumber1 + " " + "displayOnCalculator " + displayOnCalculator + " " + "num1 " + num1);
})

const percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    if (!twoNumbers && displayOnCalculator !== "Error, please press A/C") {
        buildingNumber1 = calculatePercent(num1);
        displayOnCalculator = buildingNumber1;
        num1 = parseFloat(displayOnCalculator);
        display.textContent = displayOnCalculator;
    }
})


const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if (!twoNumbers && !isFloat(num1) && displayOnCalculator !== "Error, please press A/C") {
        buildingNumber1 = buildingNumber1 + ".";
        displayOnCalculator = buildingNumber1;
        num1 = parseFloat(displayOnCalculator);
        display.textContent = displayOnCalculator;
    } else if (twoNumbers && !isFloat(num2)) {
        buildingNumber2 = buildingNumber2 + ".";
        displayOnCalculator = displayOnCalculator + ".";
        num2 = parseFloat(buildingNumber2);
        display.textContent = displayOnCalculator;
    }

})