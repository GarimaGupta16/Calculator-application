let display = document.getElementById("display");
let currentInput = "0";

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  if ("+-*/".includes(currentInput.slice(-1))) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "0";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || "0";
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}


function calculateSquareRoot() {
  try {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function calculateSquare() {
  try {
    currentInput = Math.pow(parseFloat(currentInput), 2).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function calculateSin() {
  try {
    currentInput = Math.sin(toRadians(parseFloat(currentInput))).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function calculateCos() {
  try {
    currentInput = Math.cos(toRadians(parseFloat(currentInput))).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function calculateTan() {
  try {
    currentInput = Math.tan(toRadians(parseFloat(currentInput))).toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}


function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
