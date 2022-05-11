btn.onclick = (event) => {
    if ((pwdInp2.value !== pwdInp1.value)) {
        event.preventDefault();
        pwdInp2.style.border = '1px solid red';
        btn.disabled = true;
        btn.classList.add('signup__submit_disabled');

        let div = `<div id="error" style="color: red;margin: -10px 0 15px 2px;"> Разные пароли. Проверьте пароль </div>`;
        dateBirth.insertAdjacentHTML('beforebegin', div);       

        pwdInp2.onkeyup = () => {
            if (pwdInp2.value == pwdInp1.value) {
                pwdInp2.style.border = '1px solid green';
                btn.disabled = false;
                btn.classList.remove('signup__submit_disabled');
                btn.classList.add('signup__submit_enable');
                document.querySelector('#error').hidden = true;
            } else {
                pwdInp2.style.border = '1px solid red';
                btn.disabled = true;
                btn.classList.remove('signup__submit_enable');
                btn.classList.add('signup__submit_disabled');
                document.querySelector('#error').hidden = false;

            }
        }
    }
}