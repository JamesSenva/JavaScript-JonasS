'use strict';

const btnOpen = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal')

// function to open and close the modal window which will be passed ad event handeler to the event listener
const open = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// clicking on any of the three buttons will show the modal window
btnOpen.forEach( bt => {
    bt.addEventListener('click', open);
})

// clicking on close button or outside the modal window will hide the modal window
btnClose.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if(e.key === "Escape"){
        // modal.classList.toggle('hidden');
        // overlay.classList.toggle('hidden');
        if(!modal.classList.contains('hidden')){
            close();
        }
    }
})