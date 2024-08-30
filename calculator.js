
let currentValue = "";
let previousValue = "";
let operator = "";
let resultDisplayed = false;

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
      return;
  }

  currentValue = result.toString();
  previousValue = "";
  operator = "";
  return result;
}

module.exports = {
  calculate,
  setValues: (curVal, prevVal, op) => {
    currentValue = curVal;
    previousValue = prevVal;
    operator = op;
  },
  getCurrentValue: () => currentValue,
};

