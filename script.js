const addition = function (a, b) {
  return a + b;
};

const subtraction = function (a, b) {
  return a - b;
};

const multiplication = function (a, b) {
  return a * b;
};

const division = function (a, b) {
  return a / b;
};

let firstNum;
let operator;
let secondNum;


function operate(fN,oP,sN){
    if (oP === "+"){
        return addition(fN,sN);
    }else if (oP === "-"){
        return subtraction(fN,sN);
    }else if (oP == "*"){
        return multiplication(fN,sN);
    }else if (oP === "/"){
        return division(fN,sN)
    }
}
console.log(operate(10,"+",89))