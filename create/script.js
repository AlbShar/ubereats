"use strict";
const firstPswdInput = document.querySelector('#pwd');
const secondPswdInput = document.querySelector('#pwd2');
const listInputs = document.querySelector('.signup__list');
const listValidatPswd = document.querySelector("#message");
const itemPswdHasLowLet = document.querySelector("#lowLetter");
const itemPswdHasCapLet = document.querySelector("#capLetter");
const itemPswdHasNum = document.querySelector("#number");
const itemPswdLength = document.querySelector("#length");
const submitButton = document.querySelector('#btn');
const dateBirthInput = document.querySelector("#dateBirth");
const clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');




firstPswdInput.onfocus = () => {
    listValidatPswd.classList.remove('signup__message_invisible');
    listValidatPswd.classList.add('signup__message_visible');
};

firstPswdInput.onblur = () => {
    listValidatPswd.classList.remove('signup__message_visible');
    listValidatPswd.classList.add('signup__message_invisible');
};

firstPswdInput.onkeyup = () => {
    let lettersAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    if (firstPswdInput.value.length >= 8) {
        itemPswdLength.classList.remove('signup__message-item_invalid');
        itemPswdLength.classList.add('signup__message-item_valid');
    } else {
        itemPswdLength.classList.remove('signup__message-item_valid');
        itemPswdLength.classList.add('signup__message-item_invalid');
    }

    for (let item of lettersAlphabet) {
        if (firstPswdInput.value.includes(item)) {
            itemPswdHasLowLet.classList.remove('signup__message-item_invalid');
            itemPswdHasLowLet.classList.add('signup__message-item_valid');
            break;
        } else {
            itemPswdHasLowLet.classList.remove('signup__message-item_valid');
            itemPswdHasLowLet.classList.add('signup__message-item_invalid');
        }
    }

    for (let item of lettersAlphabet) {
        if (firstPswdInput.value.includes(item.toUpperCase())) {
            itemPswdHasCapLet.classList.remove('signup__message-item_invalid');
            itemPswdHasCapLet.classList.add('signup__message-item_valid');
            break;
        } else {
            itemPswdHasCapLet.classList.remove('signup__message-item_valid');
            itemPswdHasCapLet.classList.add('signup__message-item_invalid');
        }
    }

    for (let item of numbers) {
        if (firstPswdInput.value.includes(item)) {
            itemPswdHasNum.classList.remove('signup__message-item_invalid');
            itemPswdHasNum.classList.add('signup__message-item_valid');
            break;
        } else {
            itemPswdHasNum.classList.remove('signup__message-item_valid');
            itemPswdHasNum.classList.add('signup__message-item_invalid');
        }
    }
};

submitButton.onclick = (event) => {
    if ((secondPswdInput.value !== firstPswdInput.value)) {
        event.preventDefault();
        secondPswdInput.style.border = '1px solid red';
        submitButton.disabled = true;
        submitButton.classList.add('signup__submit_disabled');

        const errorText = `<div id="error" class="signup__error"> Разные пароли. Проверьте пароль </div>`;
        dateBirthInput.insertAdjacentHTML('beforebegin', errorText);

        secondPswdInput.onkeyup = () => {
            const errorText = document.querySelector('#error');
            if (secondPswdInput.value == firstPswdInput.value) {
                secondPswdInput.style.border = '1px solid green';
                submitButton.disabled = false;
                submitButton.classList.remove('signup__submit_disabled');
                submitButton.classList.add('signup__submit_enable');
                errorText.hidden = true;
            } else {
                secondPswdInput.style.border = '1px solid red';
                submitButton.disabled = true;
                submitButton.classList.remove('signup__submit_enable');
                submitButton.classList.add('signup__submit_disabled');
                errorText.hidden = false;

            }
        };
    }
};

function changeTypeInput(event) {
    if (event.target.classList.contains('signup__icon-eye')) {
        event.target.previousElementSibling.type = 
        (event.target.previousElementSibling.type === "Pswd") ? "text" : "Pswd";

        setClassIconEye(event);
        stayVisibleValidateList(event);
    }
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

function stayVisibleValidateList(event) {
    if (event.target.id == 'eye1' && (listValidatPswd.classList.contains('signup__message_invisible'))) {
        listValidatPswd.classList.remove('signup__message_invisible');
        listValidatPswd.classList.add('signup__message_visible');
    }
}


listInputs.addEventListener(clickEvent, changeTypeInput);