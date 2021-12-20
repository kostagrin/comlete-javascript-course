// JS Fundamentals - Part 1
///////////////////////////////
// Values and Variables
///////////////////////////////
const country = 'Russia';
const continent = 'Euroasia';
let population = 160000000;

// console.log(country, continent, population);

///////////////////////////////
// Data Types
///////////////////////////////
const isIsland = false;
let language = 'Russian';

// console.log(typeof isIsland, population, country, language);

// let, const, var

// isIsland = true;
// console.log(isIsland);

///////////////////////////////
// Basic Operators
///////////////////////////////
const halfCountryPop = population / 2;
// console.log(halfCountryPop);

let countryPopPlus = population + 1;
// console.log(countryPopPlus);

let finnPop = 6000000;
let moreThanFinn = population > finnPop;
// console.log(moreThanFinn);

let avgPop = 33000000;
let moreThanAvgPop = population > avgPop;
// console.log(moreThanAvgPop);

let description = country + ' is in ' + continent + ', ' + 'and its ' +
    population / 1000000 + ' million people speak ' + language;
// console.log(description);

///////////////////////////////
//Strings and Template Literals
///////////////////////////////
description = `${country} is in ${continent}, and its ${population / 1000000} million people speak ${language}!`;
// console.log(description);

///////////////////////////////
//Taking Decisions: if / else Statement
///////////////////////////////
// if(population > avgPop) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${avgPop - population} below average.`);
// }

///////////////////////////////
// Type Conversion and Coercion
///////////////////////////////
'9' - '5' // = 4
'19' - '13' + '17' // = '617'
'19' - '13' + 17 // = 23
    '123' < 57 // false ???
5 + 6 + '4' + 9 - 4 - 2 // 11 -> 114 -> 1149 -> 1145 -> 1143

///////////////////////////////
// Equality Operators
///////////////////////////////
// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
// const numNeighbours = prompt(`How many neighbour countries does your country have?`);

// if (numNeighbours === 1) {
//     console.log(`${country} has only ${numNeighbours} border!`)
// } else if (numNeighbours > 1) {
//     console.log(`${country} has more than 1 border.`);
// } else {
//     console.log(`${country} has no neighbours.`);
// }

///////////////////////////////
// Logical Operators
///////////////////////////////
const sarahName = 'Sarah';

if (population < 50000000 && language === 'English' && !isIsland) {
    console.log(`This country is good for ${sarahName}.`);
} else {
    console.log(`${country} does not meet your criteria.`);
}

///////////////////////////////
// The switch Statement
///////////////////////////////
// language = 'Mandarin';
switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'Spanish':
        console.log(`2nd plase.`);
        break;
    case 'English':
        console.log(`3rd plase.`);
        break;
    case 'Hindi':
        console.log(`Number 4`);
        break;
    case 'Arabic':
        console.log(`5th most spoken language.`);
        break
    default:
        console.log(`Great language too :D 😎`);
}

///////////////////////////////
// The Conditional (Ternary) Operator
///////////////////////////////
// population = 13000000;
console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`);