// let js = "hello";
//       if (js === "hello") {
//         alert("js is very fun");
//       }

let country = "India";
let continent = "Asia";
let population = 569;
console.log(country);

console.log(
  "I live in " +
    country +
    " which is in " +
    continent +
    " and its population is " +
    population +
    " million"
);

//Data types

const isIsland = false;
let language;
language = "kashmiri";
console.log(typeof isIsland);
console.log(typeof language);

// let var const
let firstName = "faizan";
console.log(firstName);
firstName = "Wani";
console.log(firstName);
// let firstName="adil"  cannot reasign the let keyword again in the same scope
{
  let firstName = "adil";
  // in this scope we can re declare the let keyword with the same name
}

const dob = 1998;
// dob=2000; we cannot reasign value to const and we need to assign value to const any how
console.log(dob);
const noOfFamilyMember = 12;
console.log(noOfFamilyMember);

// template string
console.log(`hello
how are you 
`);

//if else
let age = 10;
let check = age >= 18;
if (check) {
  console.log(`you are old enough to ride 😊`);
} else {
  console.log(`you are not eligible to ride a car 😢`);
}

const birthYear = 1998;
let century;
if (birthYear <= 1999) {
  century = 20;
} else {
  century = 21;
}
console.log(`${century} th century`);

// bmi calculator:
let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / (johnsHeight * johnsHeight);
console.log(marksBMI);
console.log(johnsBMI);
let markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

if (marksBMI > johnsBMI) {
  console.log(`marks bmi ${marksBMI} is higher then johns ${johnsBMI}`);
} else {
  console.log(`johns bmi ${johnsBMI} is higher than mark ${marksBMI}`);
}

//switch case

let day = "saturday";
switch (day) {
  case "monday":
    console.log("Scrum with devops");
    console.log("meeting with client");
    break;
  case "tuesday":
    console.log("Gmeet with team ");
    break;
  case "wednesday":
    console.log("Team lunch");
    console.log("Team discussion");
    break;
  case "thusrday":
  case "friday":
    console.log("cricket match");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy weekend");
    break;
  default:
    console.log("wrong input");
}

// now this using if else if

let num = 3;
if (num == 0) {
  console.log("Scrum with devops");
  console.log("meeting with client");
} else if (num == 1) {
  console.log("Gmeet with team ");
} else if (num == 2) {
  console.log("Team lunch");
  console.log("Team discussion");
} else if (num == 3 || num == 4) {
  console.log("cricket match");
} else {
  console.log("wong");
}

///ternary operator

const vote = 17;
// vote>=18 ? console.log("can vote") : console.log("cannot vote");
let can = vote >= 18 ? "can vote" : "cannot vote";
console.log(can);

// or in if else we can erite this as
let res;
if (vote >= 18) {
  res = "can vote";
} else {
  res = "cannot vote";
}
console.log(res);

console.log(
  `i am ${vote} years old and i ${vote >= 18 ? "can vote" : "cannot vote"}`
);

//coding chalange 1
const teamA = (97 + 112 + 101) / 3;
const teamB = (109 + 95 + 123) / 3;

console.log(`team A has scored ${teamA} and team B has scored ${teamB}`);

if (teamA > teamB) {
  console.log("team A wins");
} else if (teamA < teamB) {
  console.log("team B wins");
} else {
  console.log("it a draw");
}

//challenge 2
const bill = 340;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  ` the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
