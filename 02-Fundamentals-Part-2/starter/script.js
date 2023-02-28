'use strict';

//------------------------------------------------------------------

// lecture 33 - Functions

// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const firstCountry = describeCountry('India', 1394, 'Delhi');
// const secondCountry = describeCountry('USA', 300, 'Washington DC');
// const thirdCountry = describeCountry('Shri Lanka', 50, 'Columbo');

// console.log(firstCountry);
// console.log(secondCountry);
// console.log(thirdCountry);


//------------------------------------------------------------------

// lecture 34 function declaration vs expression

// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

// function percentageOfWorld1 (population) {
//     return ((100 * population) / 7900).toFixed(1);
// }

// console.log(percentageOfWorld1(1394).toFixed(1));

// const populationIndia = percentageOfWorld1(1394);
// const populationChina = percentageOfWorld1(1441);
// const populationUSA = percentageOfWorld1(500);

// console.log(populationChina, populationIndia, populationUSA);

// const percentageOfWorld2 = function(population){
//     return ((100 * population) / 7900).toFixed(1);
// }

// console.log(percentageOfWorld2(1394));
// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(500));

//------------------------------------------------------------------

// lecture 35 - arrow functions

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

// const percentageOfWorld3 = (population) => {
//     return ((100 * population) / 7900).toFixed(1);
// }

const percentageOfWorld3 = population => (100 * population) / 7900;

console.log(percentageOfWorld3(1394));

//------------------------------------------------------------------

