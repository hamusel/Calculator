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

let buildingNumber1 = "";
let buildingNumber2 = "";
let displayOnCalculator = ""
let num1 = NaN;
let num2 = NaN;
let operator = "";
let twoNumbers = false;


const numbers = document.querySelectorAll(".number");
numbers.forEach(button => {
    button.addEventListener("click", () => {

        if (operator === "") {
            buildingNumber1 += button.innerText;
            displayOnCalculator = buildingNumber1;
            display.textContent = displayOnCalculator;
            num1 = parseFloat(buildingNumber1);
        } else {
            buildingNumber2 += button.innerText;
            displayOnCalculator += button.innerText;
            display.textContent = displayOnCalculator;
            num2 = parseFloat(button.innerText);
            twoNumbers = true;
        }


    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {
    button.addEventListener("click", () => {
        if (!twoNumbers) {
            operator = button.innerText;

            if (isNaN(displayOnCalculator[displayOnCalculator.length - 1])) {
                displayOnCalculator = displayOnCalculator.slice(0, -1) + operator;
            } else {
                displayOnCalculator += operator;
            }

            display.textContent = displayOnCalculator;
        } else {
            displayOnCalculator = eval(operator, num1, num2);
            buildingNumber1 = "";
            buildingNumber2 = "";
            num1 = parseFloat(displayOnCalculator);
            num2 = NaN;
            display.textContent = displayOnCalculator;
            twoNumbers = false;
            operator = "";
        }
    });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (twoNumbers) {
        twoNumbers = false;
        displayOnCalculator = eval(operator, num1, num2);
        num1 = parseFloat(displayOnCalculator);
        display.textContent = displayOnCalculator;
        num2 = NaN;
        buildingNumber1 = "";
        buildingNumber2 = "";
        operator = "";
    }

})


// Avem variabilele num1, num2, operator, buildingNumber1, buildingNumber2, displayOnCalculator si twoNumbers
// la inceput num1=NaN, num2=NaN, operator="", buildingNumber1="", buildingNumber2="", displayOnCalculator="" si twoNumbers=false
// apasam pe numere si verificam daca operatorul e ""
    // este "", incepem sa construim in buildingNumber1 cu += si num1 ii ia valoarea prin parseFloat()
    // nu este operatorul "", inseamna ca avem deja un num1 => construim in buildingNumber2 cu += si num2 ii ia valoarea, twoNumbers devine true
// operatorul verifica daca avem deja doua numere
    // daca da => aplicam eval() pe num1, resetam displayOnCalculator, buildingNumber1 num1 devine rezultatul lui eval() num2 devine NaN, buildingNumber2 se intoarce la "", twoNumbers devine false si operator=""
    // daca nu => adaugam operatorul la displayOnCalculator/inlocuim
// equals verifica sa avem 2 numere, ii da valoarea lui num1 si reseateaza num2, operatorul, building-urile, twoNumbers si pe displayOnCalculator il face sa aiba valoarea lui eval()