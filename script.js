const calculator = require('./calculator');

const displayButtons = document.querySelectorAll(".btn");
const operationButtons = document.querySelectorAll(".op-btn");
const displayScreen = document.querySelector(".display > h1");
const equalsButton = document.querySelector(".eq-btn");
const clearButton = document.querySelector(".cl-btn");
const toggleCheckbox = document.querySelector(".toggle-checkbox");

function enableCalculator() {
  displayButtons.forEach(button => button.disabled = false);
  operationButtons.forEach(button => button.disabled = false);
  equalsButton.disabled = false;
  clearButton.disabled = false;
}

function disableCalculator() {
  displayButtons.forEach(button => button.disabled = true);
  operationButtons.forEach(button => button.disabled = true);
  equalsButton.disabled = true;
  clearButton.disabled = true;
}

toggleCheckbox.addEventListener("change", function() {
  if (toggleCheckbox.checked) {
    enableCalculator();
    displayScreen.textContent = "Calculator On";
  } else {
    disableCalculator();
    displayScreen.textContent = "Calculator Off";
    calculator.setValues("", "", ""); // Reset calculator values
  }
});

disableCalculator();
displayScreen.textContent = "Calculator Off";

displayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (resultDisplayed) {
      currentValue = '';
      resultDisplayed = false;
    }
    currentValue = currentValue + button.textContent;
    displayScreen.textContent = currentValue;
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentValue === "") return;
    if (previousValue !== "") {
      calculator.setValues(currentValue, previousValue, operator);
      calculator.calculate();
    }
    operator = button.textContent;
    previousValue = currentValue;
    currentValue = "";
    resultDisplayed = false;
  });
});

equalsButton.addEventListener("click", () => {
  if (currentValue === "" || previousValue === "") return;
  calculator.setValues(currentValue, previousValue, operator);
  const result = calculator.calculate();
  displayScreen.textContent = result;
  resultDisplayed = true;
});

clearButton.addEventListener("click", () => {
  currentValue = "";
  previousValue = "";
  operator = "";
  displayScreen.innerText = "";
  resultDisplayed = false;
});

