let currentResult = 0;

function getUserInput() {
  return parseInt(userInput.value);
}
function createAndWriteCode(operator, resultBeforeCalc, calNumber) {
  const calDescription = `${resultBeforeCalc} ${operator} ${calNumber}`;
  outputResult(currentResult, calDescription);
}

function calcResult(calculationType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteCode(mathOperator, initialResult, enteredNumber);
}

function add() {
  calcResult("ADD");
}
function subtract() {
  calcResult("SUBTRACT");
}
function multiply() {
calcResult("MULTIPLY");
}
function divide() {
calcResult("DIVIDE")
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
mulBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);
