"user sctrict";
let pwdInp1 = document.querySelector('#pwd');
let pwdInp2 = document.querySelector('#pwd2');
let btn = document.querySelector('#btn');
let ul = document.querySelector('.signup__list');
let dateBirth = document.querySelector("#dateBirth");

let letter = document.querySelector("#lowLetter");
let capital = document.querySelector("#capLetter");
let number = document.querySelector("#number");
let length = document.querySelector("#length");
let message = document.querySelector("#message");


pwdInp1.onfocus = () => {
    message.classList.remove('signup__message_invisible');
    message.classList.add('signup__message_visible');
};

pwdInp1.onblur = () => {
    message.classList.remove('signup__message_visible');
    message.classList.add('signup__message_invisible');
};

pwdInp1.onkeyup = () => {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let val = pwdInp1.value;

    if (val.length >= 8) {
        length.classList.remove('signup__message-item_invalid');
        length.classList.add('signup__message-item_valid');
    } else {
        length.classList.remove('signup__message-item_valid');
        length.classList.add('signup__message-item_invalid');    
    }

    for (let item of letters) {
        if (val.includes(item)) {
            letter.classList.remove('signup__message-item_invalid');
            letter.classList.add('signup__message-item_valid');
            break;
        } else {
            letter.classList.remove('signup__message-item_valid');
            letter.classList.add('signup__message-item_invalid');
        }
    }

    for (let item of letters) {
        if (val.includes(item.toUpperCase())) {
            capital.classList.remove('signup__message-item_invalid');
            capital.classList.add('signup__message-item_valid');
            break;
        } else {
            capital.classList.remove('signup__message-item_valid');
            capital.classList.add('signup__message-item_invalid');
        }
    }

    for (let item of numbers) {
        if (val.includes(item)) {
            number.classList.remove('signup__message-item_invalid');
            number.classList.add('signup__message-item_valid');
            break;
        } else {
            number.classList.remove('signup__message-item_valid');
            number.classList.add('signup__message-item_invalid');
        }
    }
};

function showPwd(event) {
    let evTrgt = event.target;
    if (evTrgt.classList.contains('signup__icon-eye')) {
        if (evTrgt.id =='eye1' && (message.classList.contains('signup__message_invisible'))) {
            message.classList.remove('signup__message_invisible');
            message.classList.add('signup__message_visible');
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


ul.addEventListener('click', showPwd);
ul.addEventListener('touchstart', showPwd);
ul.addEventListener('touchend', showPwd);
ul.addEventListener('touchcancel', showPwd);
ul.addEventListener('touchmove', showPwd);
