/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);

let age = 22;
const birthYear = 2001;

const ageZack = 2023 - 2001;
const ageSydney = 2023 - 2000;
console.log(ageZack, ageSydney);

const firstName = "Zack";
const lastName = "Gallipeau";
console.log(firstName, lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x /= 4;
x--;
console.log(x);

const fullName = firstName + " " + lastName;
console.log(fullName);

const descriptionZack = `I'm ${firstName} ${lastName}, a loser with no job`;
console.log(descriptionZack);


//type conversion
const age = 15

if (age >= 16) {
    console.log(`Sara can start earning her license`)
} else {
    console.log(`that bitch isn't old enough to drive. Wait another ${16 - age} years`)
}

let inputYear = "2001";

console.log(inputYear);
console.log(inputYear + 115);

console.log(Number(inputYear) + 18);

const thisNumber = 55;

console.log(String(thisNumber) + 26);



//type coercion
console.log(`I am ` + 23 + ` years old.`);
console.log("25" - "10" - 5);
console.log("50" * "2");

console.log(Boolean(thisNumber));

const thatNumber = 0;
console.log(Boolean(thatNumber));



const age = 18;
if (age === 18) console.log("You just became an adult!")

const favoriteNumber = Number(prompt("What's your favorite number?"))
console.log(favoriteNumber)


if (favoriteNumber === 420) {
    console.log("Hell yeah, blaze it baby!");
} else if (favoriteNumber === 69) {
    console.log("Nice")
} else {
    console.log("That's a boring number but you do you buddy. By the way, I OWN chickens, buddy")
}

if (favoriteNumber !== 15) {
    console.log("It would have been cooler if you picked 15")
}



const hasDriversLicense = false;
const hasGoodVision = false;

if (hasDriversLicense && hasGoodVision) {
    console.log("You are likely to be a good driver!")
} else if (hasDriversLicense) {
    console.log("Make sure you wear glasses!")
} else if (!hasDriversLicense) {
    console.log("You better not touch that steering wheel you ugly bitch!")
}

alert("I OWN chickens, buddy")



const guitar = 7

switch (guitar) {
    case 6:
        console.log("Time to play reptile!")
        break;
    case 7:
        console.log("Wildfire it is!")
        break;
    case 8:
        console.log("Lets get started on Dracul Gras!")
        break;
    default:
        console.log("Please buy a guitar you loser")
}


const LEMON = "asdf"
switch (LEMON) {
    case "asdf":
        console.log("asdf")
        break;
}
*/

const guitar = 6;

console.log(`I am going to play the song ${guitar === 7 ? `Wildfire` : `Reptile`}`);
