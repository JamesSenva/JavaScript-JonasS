// 'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     // console.log(firstName);

//     function printAge() {
//         const output = `${firstName}, You are ${age}, born in ${birthYear}`
//         console.log(output);

//         // block scope example
//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven'
//             const str = `Oh, and you are a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b){
//                 return a + b;
//             }
//         }
//         // console.log(str);
//         console.log(millenial); // variable declared with var is accessible outside of block scope
//         // console.log(add(2,3));
//     }
//     printAge();
//     return age;
// }

// const firstName = 'James';
// calcAge(1991);
// // printAge();
// // console.log(age);


console.log(me);
// console.log(job);
// console.log(year);

var me = 'James';
let job = 'teacher';
const year = 1993;

console.log(addDecl(2, 3))
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function(a, b) {
//   return a + b;
// }

// const addArrow = (a, b) => a + b;

var addExpr = function(a, b) {
    return a + b;
}
  
var addArrow = (a, b) => a + b;

