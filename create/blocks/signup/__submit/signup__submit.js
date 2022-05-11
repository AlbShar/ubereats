"use strict";
let btn = document.querySelector('#btn');

let dateBirth = document.querySelector("#dateBirth");


btn.onclick = (event) => {
    if ((pwdInp2.value !== pwdInp1.value)) {
        event.preventDefault();
        pwdInp2.style.border = '1px solid red';
        btn.disabled = true;
        btn.classList.add('signup__submit_disabled');

        let div = `<div id="error" class="signup__error"> Разные пароли. Проверьте пароль </div>`;
        dateBirth.insertAdjacentHTML('beforebegin', div);       

        pwdInp2.onkeyup = () => {
            let error = document.querySelector('#error');
            if (pwdInp2.value == pwdInp1.value) {
                pwdInp2.style.border = '1px solid green';
                btn.disabled = false;
                btn.classList.remove('signup__submit_disabled');
                btn.classList.add('signup__submit_enable');
                error.hidden = true;
            } else {
                pwdInp2.style.border = '1px solid red';
                btn.disabled = true;
                btn.classList.remove('signup__submit_enable');
                btn.classList.add('signup__submit_disabled');
                error.hidden = false;

            }
        }
    }
}