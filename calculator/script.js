const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const percentBtn = document.getElementById("percent");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const equalsBtn = document.getElementById("equalto");
const decimalBtn = document.getElementById("decimal");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function clear() {
  display.innerText = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
}

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendDecimal() {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
}

function selectOperator(selectedOperator) {
  if (operator !== "") {
    operate();
  }
  operator = selectedOperator;
  firstNumber = display.innerText;
  display.innerText = "";
}

function operate() {
  if (operator === "") {
    return;
  }

  clearBtn.addEventListener("click", clear);
  backspaceBtn.addEventListener("click", backspace);
  percentBtn.addEventListener("click", () => selectOperator("%"));
  divideBtn.addEventListener("click", () => selectOperator("/"));
  multiplyBtn.addEventListener("click", () => selectOperator("*"));
  subtractBtn.addEventListener("click", () => selectOperator("-"));
  addBtn.addEventListener("click", () => selectOperator("+"));
  equalsBtn.addEventListener("click", operate);
  decimalBtn.addEventListener("click", appendDecimal);

  const numberBtns = document.querySelectorAll(".row .btn:not(.operator)");
  numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
      appendNumber(button.innerText);
    });
  });

  secondNumber = display.innerText;
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    case "%":
      result = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber);
      break;
    default:
      return;
  }
  display.innerText = result;
  operator = "";
}
