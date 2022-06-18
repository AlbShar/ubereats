import {firstPswdInput} from "../__message/showValidateList.js"
export function checkPasswords() {
    const secondPswdInput = document.querySelector('#pwd2');
    const submitButton = document.querySelector('#btn');


    submitButton.onclick = (event) => {
        const dateBirthInput = document.querySelector("#dateBirth");

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
}