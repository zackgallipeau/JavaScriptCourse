"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can DRIVE baby! Get out the vodka and the keys and lets celebrate!")

let parkour;

let fullName = prompt();

if (fullName === "Michael Scott") {
    console.log("Parkour! Hardcore parkour!")
}


function infoLog() {
    let userString = prompt("Please type something. Anything!");
    console.log(`You typed "${userString}"! Is that really the best you could come up with?`)
}

infoLog();


function makeSandwich(ham, cheese, mayo) {
    const sandwich = `Sandwich with ${ham} slices of ham, ${cheese} slices of cheese, and ${mayo} mayo.`;
    return sandwich;
}

const deliciousSandwich = makeSandwich(6, 2, "a lot of");
console.log(deliciousSandwich);

const subparSandwich = makeSandwich(2, 0, "no");
console.log(subparSandwich);

//Function Declaration
function calculateAge(birthYear) {
    return 2023 - birthYear;
}

const age1 = calculateAge(2001);
console.log(age1);
//function expression (does the same thing)

const calculateAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calculateAge2(2001);
console.log(age2);

//arrow function
const calculateAge3 = birthYear => 2023 - birthYear
console.log(calculateAge3(2006));


const quickMaths = quickMath => 2 + quickMath;
console.log(quickMaths(2));

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `Zack will get to retire in ${retirement} years. Cry about it.`;
}
console.log(yearsUntilRetirement(2001));


console.log("WAAAAAAAAAAAAAAAAAAA (that was Mario falling off a cliff)")

function cutDeliProduct(food) {
    return food * 4;
}

function makeSandwich(ham, cheese, mayo) {
    const hamSlices = cutDeliProduct(ham);
    const cheeseSlices = cutDeliProduct(cheese);

    const sandwich = `Sandwich made with ${hamSlices} slices of ham, ${cheeseSlices} slices of cheese, and ${mayo} of Mayo`;
    return sandwich;
}

const goodSandwich = makeSandwich(2, 1, "a lot of")
console.log(goodSandwich);


function retirementAge(userName, userAge) {
    if (userAge >= 65) {
        return console.log(`${userName} has already retired!`);
    } else {
        return console.log(`${userName} will not be able to retire for ${65 - userAge} years. :(`);
    }
}

const zackRetirement = retirementAge("Zack", 22); 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers[2]);

console.log(numbers.length);

numbers[2] = 11;

console.log(numbers);

const firstName = "Zack";
const lastName = "Gallipeau";

const aboutMe = [firstName, lastName, 22, true];

const aboutSyd = ["Sydney", "Gallipeau", aboutMe];

console.log(aboutSyd[2]);

aboutMe[3] = aboutSyd;

console.log(aboutMe);
console.log(aboutSyd);


function calculateAge(birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [calculateAge(years[0]), calculateAge(years[4]), calculateAge(years[2]), calculateAge(years[3]), calculateAge(years[4]),]
console.log(ages);



const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
console.log(friends);

const myObject = {
    firstName: "Zack",
    lastName: "Gallipeau",
    age: 22,
    weight: 215,
    friendsList: ["Jerry", "Gerry", "Jerreigh"]
}

console.log(myObject.lastName);

const objectValue = prompt("What do you want to know about Zack? Pick between firstName, lastName, age, or weight friendsList.")

myObject.location = "Smyrna";

if (myObject[objectValue]) {
    console.log(`Zack's ${objectValue} is ${myObject[objectValue]}`);
} else {
    console.log("You made a typo, dumbass. try again")
}

console.log(`${myObject.firstName} has ${myObject.friendsList.length} friends, and his best friend is named ${myObject.friendsList[0]}`);


const zack = {
    firstName: "Zack",
    lastName: "Gallipeau",
    birthYear: 2001,
    job: "Unemployed LOSER",
    friends: ["Jerry", "Gerry", "Jerreigh"],
    hasDriversLicense: true,
    calculateAge: function () {
        this.age = `${2023 - this.birthYear}`;
        return this.age;
    },
    getSummary: function () {
        if (self.hasDriversLicense = true) {
            return `${this.firstName} is a ${this.calculateAge()} year old ${this.job}, and he ${this.hasDriversLicense ? "has a drivers license" : "does not have a drivers license."}`
        }
    }
}


console.log(zack.calculateAge());

console.log(zack['age']);
console.log(zack.age);

console.log(zack.getSummary());

for (let repetition = 1; repetition <= 10; repetition++) {
    console.log(`repetiton ${repetition}`)
}

const types = [];

for (let i = 0; i < zack.length; i++) {
    console.log(zack[i]);
    //types[i] = typeof zack[i];
    types.push(typeof zack[i]);
}
console.log(types);

const years = [1991, 1992, 1993, 1994, 1995, 1996, "nineteen ninety seven", "nineteen ninety eight"];

const ages = [];

for (let i = 0; i < years.length; i++) {
    if (typeof years[i] !== "number") continue;
    ages.push(2023 - years[i]);
}
console.log(ages);

const zack = [
    "Zack",
    "Gallipeau",
    2001,
    "Unemployed LOSER",
    ["Jerry", "Gerry", "Jerreigh"]
];

const zackNew = [];

for (let i = zack.length - 1; i >= 0; i--) {
    zackNew.push(zack[i]);
}

console.log(zackNew);

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 11; rep++) {
        console.log(`Lifting weight exercise ${exercise}, repetition ${rep}`);
    }
}
*/

// let rep = 1;
// while (rep < 11) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++
// }

let dice = Math.trunc(Math.random() * 6 + 1);

if (dice === 6) {
    console.log(`you rolled a ${dice}`)
} else {
    while (dice !== 6) {
        console.log(`you rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6 + 1);
        if (dice === 6) console.log(`You rolled a 6!`);
    }
}