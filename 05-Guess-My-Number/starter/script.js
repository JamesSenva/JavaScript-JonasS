'use strict';

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const guess = +document.querySelector('.guess');

const number = function() {
    console.log(guess.value, typeof guess);
    if(!guess){
        message.textContent = 'Not a number!';
    }
};

check.addEventListener('click', number);


