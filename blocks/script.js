"use strict";
const pswdInput = document.querySelector('#pwd');
const listFields = document.querySelector('#list');
const modalLoginForm = document.querySelector('#modal');
const iconClose = document.querySelector('#close');
const clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');

function closeLoginForm(event) {
    if (event.target == modalLoginForm || event.target == iconClose) {
        modalLoginForm.style.display = 'none';
        pswdInput.value = '';
        event.preventDefault();
    }
}

function changeTypeInput(event) {
    if (event.target.tagName !== 'I') {return;}
    setClassIconEye(event);
    event.target.previousElementSibling.type = 
    (event.target.previousElementSibling.type === "password") ? "text" : "password";
}

function setClassIconEye(event) {
    if (event.target.classList.contains('fa-eye-slash')) {
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye');
    } else {
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');
    }
}

listFields.addEventListener(clickEvent, changeTypeInput);

window.addEventListener('click', closeLoginForm);
window.addEventListener('touchstart', closeLoginForm);
window.addEventListener('touchend', closeLoginForm);
window.addEventListener('touchcancel', closeLoginForm);
window.addEventListener('touchmove', closeLoginForm);
