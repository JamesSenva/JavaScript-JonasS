'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // console.log(firstName);

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        // block scope example
        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven'
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial); // variable declared with var is accessible outside of block scope
        // console.log(add(2,3));
    }
    printAge();
    return age;
}

const firstName = 'James';
calcAge(1991);
// printAge();
// console.log(age);