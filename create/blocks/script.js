
let eye1 = document.querySelectorAll('i#eye')[0];
let eye2 = document.querySelectorAll('i#eye')[1];
let pwdInp1 = document.querySelector('#pwd');
let pwdInp2 = document.querySelector('#pwd2');

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
