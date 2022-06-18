import {listValidatPswd} from "../__input/changeTypeInput.js";
const firstPswdInput = document.querySelector('#pwd');

function showValidateList() {
    firstPswdInput.onfocus = () => {
        listValidatPswd.classList.remove('signup__message_invisible');
        listValidatPswd.classList.add('signup__message_visible');
    };
}

export { firstPswdInput, showValidateList};