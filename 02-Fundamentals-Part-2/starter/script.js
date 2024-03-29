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

// const percentageOfWorld3 = population => (100 * population) / 7900;

// console.log(percentageOfWorld3(1394));

//------------------------------------------------------------------

// lecture 36 - functions calling other functions

// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people which is about 18.2% of the world.'

// const percentageOfWorld3 = population => ((100 * population) / 7900).toFixed(1);

// const describePopulation = (country, population) => {
//     return `${country} has ${population} million people which is about ${percentageOfWorld3(population)} % of the world.`
// }

// const describePopulation = (country, population) => {
//     const percentage = percentageOfWorld3(population);
//     const description = `${country} has ${population} million people which is about ${percentage}% of the world.`
//     console.log(description);
//}
// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

// 3. Call 'describePopulation' with data for 3 countries of your choice

// describePopulation('China', 1441);
// describePopulation('India', 1394);
// describePopulation('USA', 500);


//------------------------------------------------------------------

// lecture 39 arrays

// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'

    // const populations = [1394, 1441, 500, 250];


// 2. Log to the console whether the array has 4 elements or not (true or false)

    // my solution
    // if(populations.length === 4){
    //     console.log(true);
    // }else{
    //     console.log(false);
    // }

    // we can also log true or false into the console like this too

    // console.log(populations.length === 4);


// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

    // const percentageOfWorld3 = population => ((100 * population) / 7900).toFixed(1);

    // const percentages = [];

    // populations.forEach( population => {
    //     return percentages.push(percentageOfWorld3(population));
    // })

    // console.log(percentages);


//------------------------------------------------------------------------

// lecture 40 array methods

// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'

    // const neighbours = ['ShriLanka', 'Bangladesh', 'Pakistan', 'China', 'Nepal'];   

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array

    // neighbours.push('Utopia');
    // console.log(neighbours);

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array

    // neighbours.pop();
    // console.log(neighbours);

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

    // if(!neighbours.includes('Germany')){
    //     console.log('Probably not a central European country :D')
    // }

// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

    // neighbours[neighbours.indexOf('ShriLanka')] = 'Lanka';
    // console.log(neighbours);

//------------------------------------------------------------------------



// lecture 42 objects

// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

    // const myCountry = {
    //     country: 'India',
    //     capital: 'Delhi',
    //     language: 'Hindi',
    //     population: 1394,
    //     neighbours: ['Pakistan', 'Shri Lanka', 'Nepal', 'Bangladesh']
    // }

    // console.log(myCountry);


//------------------------------------------------------------------------


// lecture 43 dot vs object notation

// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

    // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// 2. Increase the country's population by two million using dot notation, 
    // myCountry.population += 2;

    // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// and then decrease it by two million using brackets notation.

    // myCountry['population'] -= 2;

    // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);


//------------------------------------------------------------------------

// lecture 44 objects methods

// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

    // const myCountry = {
    //     country: 'India',
    //     capital: 'Delhi',
    //     language: 'Hindi',
    //     population: 1394,
    //     neighbours: ['Pakistan', 'Shri Lanka', 'Nepal', 'Bangladesh'],
    //     describe: function(){
    //         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    //     },
    //     checkIsland: function() {
    //     return this.isIsland = this.neighbours.length === 0 ? true : false;
    //     }   
    // }



// 2. Call the 'describe' method

    // myCountry.describe();


// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

    
    // myCountry.checkIsland(); // function must be called first
    // console.log(myCountry.isIsland); // to access the varible value stored inside it

//------------------------------------------------------------------------

//  lecture 46 - for loop

// 1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
    
    // for(let voter = 1; voter <= 50; voter++){
    //     console.log(`Voter number ${voter} is currently voting.`);
    // }

//------------------------------------------------------------------------

// lecture 47 - Looping Arrays, Breaking and Continuing

// 1. Let's bring back the 'populations' array from a previous assignment

    // const populations = [10, 1441, 332, 83];

// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier

    // const percentageOfWorld3 = population => ((100 * population) / 7900).toFixed(1);
    // function percentageOfWorld1 (population) {
    //     return ((100 * population) / 7900).toFixed(1);
    // }

    // const percentages2 = [];

    // function percentageOfWorld1 (populations) {
    //         return ((100 * populations) / 7900).toFixed(1);
    // }

    // for (let i = 0; i < populations.length; i++) {

        
    //     // console.log(percentageOfWorld1(populations[i]));

    //     // my solutions
    //     // percentages2.push(((100 * populations[i]) / 7900).toFixed(1))
        
    //     const percent = percentageOfWorld1(populations[i]);
    //     percentages2.push(percent);
    // }

    // console.log(percentages2);

// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

//------------------------------------------------------------------------

// lecture 48 : Looping Backwards and Loops in Loops

// 1. Store this array of arrays into a variable called 'listOfNeighbours'  [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];

    // const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];

// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country

    // for(let i = 0; i < listOfNeighbours.length; i++){

    //     // console.log(i, listOfNeighbours[i]);

    //     for(let j = 0; j < listOfNeighbours[i].length; j++){
    //         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    //     }

    // }

// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

//------------------------------------------------------------------------

// lecture 49 : The while Loop

// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')

    // const populations = [10, 1441, 332, 83];

    // const percentages3 = [];

    // function percentageOfWorld1 (populations) {
    //         return ((100 * populations) / 7900).toFixed(1);
    // }

    // let i = 0;
    // while(i < populations.length){
    //     const perc = percentageOfWorld1(populations[i]);
    //     percentages3.push(perc);
    //     i++
    // }

    // console.log(percentages3);

// 2. Reflect on what solution you like better for this task: the for loop or the while loop?
