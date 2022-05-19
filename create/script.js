"use strict";
const firstPasswordInput = document.querySelector('#pwd');
const secondPasswordInput = document.querySelector('#pwd2');
const ListInputFields = document.querySelector('.signup__list');
const passwordHasLowerLetter = document.querySelector("#lowLetter");
const passwordHasCapitalLetter = document.querySelector("#capLetter");
const passwordHasNumber = document.querySelector("#number");
const passwordLength = document.querySelector("#length");
const listValidationPassword = document.querySelector("#message");
const submitButton = document.querySelector('#btn');
const dateBirthInput = document.querySelector("#dateBirth");



firstPasswordInput.onfocus = () => {
    listValidationPassword.classList.remove('signup__message_invisible');
    listValidationPassword.classList.add('signup__message_visible');
};

firstPasswordInput.onblur = () => {
    listValidationPassword.classList.remove('signup__message_visible');
    listValidationPassword.classList.add('signup__message_invisible');
};

firstPasswordInput.onkeyup = () => {
    let lettersAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    if (firstPasswordInput.value.length >= 8) {
        passwordLength.classList.remove('signup__message-item_invalid');
        passwordLength.classList.add('signup__message-item_valid');
    } else {
        passwordLength.classList.remove('signup__message-item_valid');
        passwordLength.classList.add('signup__message-item_invalid');
    }

    for (let item of lettersAlphabet) {
        if (firstPasswordInput.value.includes(item)) {
            passwordHasLowerLetter.classList.remove('signup__message-item_invalid');
            passwordHasLowerLetter.classList.add('signup__message-item_valid');
            break;
        } else {
            passwordHasLowerLetter.classList.remove('signup__message-item_valid');
            passwordHasLowerLetter.classList.add('signup__message-item_invalid');
        }
    }

    for (let item of lettersAlphabet) {
        if (firstPasswordInput.value.includes(item.toUpperCase())) {
            passwordHasCapitalLetter.classList.remove('signup__message-item_invalid');
            passwordHasCapitalLetter.classList.add('signup__message-item_valid');
            break;
        } else {
            passwordHasCapitalLetter.classList.remove('signup__message-item_valid');
            passwordHasCapitalLetter.classList.add('signup__message-item_invalid');
        }
    }

    for (let item of numbers) {
        if (firstPasswordInput.value.includes(item)) {
            passwordHasNumber.classList.remove('signup__message-item_invalid');
            passwordHasNumber.classList.add('signup__message-item_valid');
            break;
        } else {
            passwordHasNumber.classList.remove('signup__message-item_valid');
            passwordHasNumber.classList.add('signup__message-item_invalid');
        }
    }
};

submitButton.onclick = (event) => {
    if ((secondPasswordInput.value !== firstPasswordInput.value)) {
        event.preventDefault();
        secondPasswordInput.style.border = '1px solid red';
        submitButton.disabled = true;
        submitButton.classList.add('signup__submit_disabled');

        const errorText = `<div id="error" class="signup__error"> Разные пароли. Проверьте пароль </div>`;
        dateBirthInput.insertAdjacentHTML('beforebegin', errorText);

        secondPasswordInput.onkeyup = () => {
            const errorText = document.querySelector('#error');
            if (secondPasswordInput.value == firstPasswordInput.value) {
                secondPasswordInput.style.border = '1px solid green';
                submitButton.disabled = false;
                submitButton.classList.remove('signup__submit_disabled');
                submitButton.classList.add('signup__submit_enable');
                errorText.hidden = true;
            } else {
                secondPasswordInput.style.border = '1px solid red';
                submitButton.disabled = true;
                submitButton.classList.remove('signup__submit_enable');
                submitButton.classList.add('signup__submit_disabled');
                errorText.hidden = false;

            }
        };
    }
};

function changeTypePasswordInput(event) {
    if (event.target.classList.contains('signup__icon-eye')) {
        if (event.target.id == 'eye1' && (listValidationPassword.classList.contains('signup__message_invisible'))) {
            listValidationPassword.classList.remove('signup__message_invisible');
            listValidationPassword.classList.add('signup__message_visible');
        }
        event.target.previousElementSibling.type = 
        (event.target.previousElementSibling.type === "password") ? "text" : "password";
        addOrRemoveSlash(event);
    }
}

function addOrRemoveSlash(event) {
    if (event.target.classList.contains('fa-eye-slash')) {
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye');
    } else {
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');
    }
}


ListInputFields.addEventListener('click', changeTypePasswordInput);
ListInputFields.addEventListener('touchstart', changeTypePasswordInput);
ListInputFields.addEventListener('touchend', changeTypePasswordInput);
ListInputFields.addEventListener('touchcancel', changeTypePasswordInput);
ListInputFields.addEventListener('touchmove', changeTypePasswordInput);