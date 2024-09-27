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

