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

        const div = `<div id="error" class="signup__error"> Разные пароли. Проверьте пароль </div>`;
        dateBirthInput.insertAdjacentHTML('beforebegin', div);

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

function showPwd(event) {
    let evTrgt = event.target;
    if (evTrgt.classList.contains('signup__icon-eye')) {
        if (evTrgt.id == 'eye1' && (listValidationPassword.classList.contains('signup__message_invisible'))) {
            listValidationPassword.classList.remove('signup__message_invisible');
            listValidationPassword.classList.add('signup__message_visible');
        }

        if (evTrgt.classList.contains('fa-eye-slash')) {
            evTrgt.classList.remove('fa-eye-slash');
            evTrgt.classList.add('fa-eye');
        } else {
            evTrgt.classList.remove('fa-eye');
            evTrgt.classList.add('fa-eye-slash');
        }
        evTrgt.previousElementSibling.type = (evTrgt.previousElementSibling.type === "password") ? "text" : "password";
    }
}


ListInputFields.addEventListener('click', showPwd);
ListInputFields.addEventListener('touchstart', showPwd);
ListInputFields.addEventListener('touchend', showPwd);
ListInputFields.addEventListener('touchcancel', showPwd);
ListInputFields.addEventListener('touchmove', showPwd);