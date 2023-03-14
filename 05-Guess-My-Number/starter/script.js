'use strict';

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const guess = Number(document.querySelector('.guess').value);
const scoreDOM = document.querySelector('.score');

// console.log(guess, typeof guess);

// generate secret number to compare with the entered number
const secretNumber = Math.trunc(Math.random() * 21);

// score
// if the guess is lower than secret number reduce 1
// if the guess is greater than secret number add 1
// should not go beyond 20;
let score = 20;

// outputs the number in the DOM
document.querySelector('.number').textContent = secretNumber;

// seperate function for the event listener
function number(){

    console.log(guess, typeof guess);

    if (!guess) {
        message.textContent = '⛔ Not a number';
    } else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!'
    } else if (guess > secretNumber) {
        if (score > 1){
            message.textContent = '📈 Too high';
            score--;
            scoreDOM.textContent = score;
        } else {
            message.textContent = 'You lost the game 😥';
            scoreDOM.textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1){
            message.textContent = '📉 Too low';
            score--;
            scoreDOM.textContent = score;
        } else {
            message.textContent = 'You lost the game 😥';
            scoreDOM.textContent = 0;
        }
    }

}


check.addEventListener('click', number);


