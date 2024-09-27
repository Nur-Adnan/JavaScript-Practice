/* */
//* Conditions
let firstName = "Adnan";
let age = 18;
let isMarried = false;

if (isMarried == true) {
  console.log(firstName + "is not married");
} else {
  console.log(firstName + "is married");
}

//* Loops
let answer = 0;
for (let i = 0; i <= 100; i++) {
  answer = answer + i;
}
console.log(answer);

//* Arrays
const personArray = ["Adnan", "Oishi"];
console.log(personArray[0]);
console.log(personArray[1]);

const ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

const genderArray = ["Male", "Female"];
for (let i = 0; i < personArray.length; i++) {
  if (genderArray[i] == "Male") {
    console.log(personArray[i]);
  }
}

//* Array of object
const allUsers = [
  {
    firstName: "Nur",
    gender: "male",
  },
  {
    firstName: "Oishi",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstName"]);
  }
}

//* function
function sum(a, b) {
  const sumValue = a + b;
  return sumValue;
}

const value = sum(1, 2);
console.log(value);

//* Bounty
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum = sum + i;
}
console.log(sum);

//* function
function sum(a, b) {
  let result = a + b;
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

const ans = sum(1, 2);
displayResult(ans);

function sum(a, b, fnToCall) {
  let result = a + b;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

const ans = sum(1, 2, displayResult);

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

const value = CalculateArithmetic(1, 2, "minus");
console.log(value);
