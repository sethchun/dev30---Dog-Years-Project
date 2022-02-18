// My age in human years:
let myAge = 25;

// The first 2 human years of a dog's life count as 10.5 dog years each (21 total)
let earlyYears = 2;
earlyYears *= 10.5;

// Since the first 2 human years are accounted for, we can subtract them from the variable myAge
let laterYears = myAge - 2;
// Each subsequent human year is equal to 4 dog years, so we multiply all our laterYears by 4
laterYears *= 4;

// Add earlyYears and laterYears to get total age in Dog Years:
let myAgeInDogYears = earlyYears + laterYears;

// Storing name as a variable, using string method .toLowerCase(); to adjust
const myName = 'Seth'.toLowerCase();

// Using template literals to interpolate variables into a string (printed to console)
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


// Extra Practice: Omit *= operator

// let myAge = 25;

// let earlyYears = 2;
// earlyYears = earlyYears * 10.5;

// let laterYears = myAge - 2;
// laterYears = laterYears * 4;

// let myAgeInDogYears = earlyYears + laterYears;

// const myName = 'Seth'.toLowerCase();
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
