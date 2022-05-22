"use strict";
const listFields = document.querySelector('#list');
const modalLoginForm = document.querySelector('#modal');
const iconClose = document.querySelector('#close');
const clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');

function closeLoginForm(event) {
    if (event.target == modalLoginForm || event.target == iconClose) {
        modalLoginForm.style.display = 'none';
        event.preventDefault();
    }
}


function changeTypeInput(event) {
    setClassIconEye(event);
    event.target.previousElementSibling.type = 
    (event.target.previousElementSibling.type === "password") ? "text" : "password";
}

function setClassIconEye(event) {
    if (event.target.tagName !== 'I') {return;}
    if (event.target.classList.contains('fa-eye-slash')) {
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye');
    } else {
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');
    }
}

listFields.addEventListener(clickEvent, changeTypeInput);
window.addEventListener(clickEvent, closeLoginForm);