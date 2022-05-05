
let eye1 = document.querySelectorAll('i#eye')[0];
let eye2 = document.querySelectorAll('i#eye')[1];
let pwdInp1 = document.querySelector('#pwd');
let pwdInp2 = document.querySelector('#pwd2');
let btn = document.querySelector('#btn');

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

    if (val.length > 8) {
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

pwdInp2.onkeyup = () => {
    if (pwdInp2.value !== pwdInp1.value) {
        pwdInp2.style.border = '1px solid red';
        btn.disabled = true;
    } else {
        pwdInp2.style.border = '1px solid green';
        btn.disabled = false;
    }
}

function showPwd(event) {
    if (event.target === eye1) {
        eye1.className = (eye1.className ==='fa fa-eye-slash') ? "fa fa-eye": 'fa fa-eye-slash';
        pwdInp1.type = (pwdInp1.type === "password") ? "text" : "password";
    } else {
        eye2.className = (eye2.className ==='fa fa-eye-slash') ? "fa fa-eye": 'fa fa-eye-slash';
        pwdInp2.type = (pwdInp2.type === "password") ? "text" : "password";    
    }
}

eye1.addEventListener('click', showPwd);
eye1.addEventListener('touchstart', showPwd);
eye1.addEventListener('touchend', showPwd);
eye1.addEventListener('touchcancel', showPwd);
eye1.addEventListener('touchmove', showPwd);

eye2.addEventListener('click', showPwd);
eye2.addEventListener('touchstart', showPwd);
eye2.addEventListener('touchend', showPwd);
eye2.addEventListener('touchcancel', showPwd);
eye2.addEventListener('touchmove', showPwd);
