const displayButtons = document.querySelectorAll(".btn");
const operationButtons = document.querySelectorAll(".op-btn");
const displayScreen = document.querySelector(".display > h1");
const equalsButton = document.querySelector(".eq-btn");
const clearButton = document.querySelector(".cl-btn");
const toggleCheckbox = document.querySelector(".toggle-checkbox");


let currentValue = "";
let previousValue = "";
let operator = "";
let resultDisplayed = false;

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
    currentValue = "";
    previousValue = "";
    operator = "";
  }
});

disableCalculator();
displayScreen.textContent = "Calculator Off";

displayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (resultDisplayed) {
      currentInput = '';
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
      calculate();
    }
    operator = button.textContent;
    previousValue = currentValue;
    currentValue = "";
    resultDisplayed = false;

  });
});

equalsButton.addEventListener("click", () => {
  if (currentValue === "" || previousValue === "")return;
  calculate();
  resultDisplayed = true;

});

clearButton.addEventListener("click", () => {
  currentValue = "";
  previousValue = "";
  operator = "";
  displayScreen.innerText = "";
  resultDisplayed = false;

});

function calculate() {
  let result;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  if (isNaN(previous) || isNaN(current)) return;
  switch (operator) {
    case "+":
      result = current + previous;
      break;
    case "-":
      result = previous - current;
      break;
    case "X":
      result = current * previous;
      break;
    case "/":
      result = previous / current;
      break;
    default:
      return ;
  }

  currentValue = result.toString();
  previousValue = "";
  operator = "";
  displayScreen.textContent = result;

}
