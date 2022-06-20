import {firstPswdInput} from "../message/showValidateList.js";

export function validatePassword() {
    const itemPswdHasLowLet = document.querySelector("#lowLetter");
    const itemPswdHasCapLet = document.querySelector("#capLetter");
    const itemPswdHasNum = document.querySelector("#number");
    const itemPswdLength = document.querySelector("#length");

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

}