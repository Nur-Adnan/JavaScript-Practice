// function -1
function sum(a, b) {
  let result = a + b;
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

const answer = sum(1, 2);
displayResult(answer);

// function -2

function sum(a, b, fnToCall) {
  let result = a + b;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

const ans = sum(1, 2, displayResult);

// function -3

function CalculateArithmetic(a, b, type) {
  if (type == "sum") {
    const value = sum(a, b);
    return value;
  }
  if (type == "minus") {
    const value = minus(a, b);
    return value;
  }
}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

const values = CalculateArithmetic(1, 2, "minus");
console.log(values);

// function -4
function CalculateArithmetic(a, b, arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a, b);
  return ans;
}

function minus(a, b) {
  return a - b;
}

const value = CalculateArithmetic(1, 2, minus);
console.log(value);

// setTimeout

function greet() {
  console.log("Hello World");
}
setTimeout(greet, 2000);

// setInterval
function greet() {
  console.log("Hello World");
}
setInterval(greet, 2000);
