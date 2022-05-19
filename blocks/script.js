"use sctrict";
const ListFields = document.querySelector('#list');
const modalLoginForm = document.querySelector('#modal');
const closeIcon = document.querySelector('#close');

function closeLoginForm(event) {
    if (event.target == modalLoginForm || event.target == closeIcon) {
        modalLoginForm.style.display = 'none';
        event.preventDefault();
    }
}


function addOrRemoveSlash(event) {
    const evTrgt = event.target;
    if (evTrgt.tagName !== 'I') {return;}
    if (evTrgt.classList.contains('fa-eye-slash')) {
        evTrgt.classList.remove('fa-eye-slash');
        evTrgt.classList.add('fa-eye');
    } else {
        evTrgt.classList.remove('fa-eye');
        evTrgt.classList.add('fa-eye-slash');
    }
    evTrgt.previousElementSibling.type = (evTrgt.previousElementSibling.type === "password") ? "text" : "password";
}



ListFields.addEventListener('click', addOrRemoveSlash);
ListFields.addEventListener('touchstart', addOrRemoveSlash);
ListFields.addEventListener('touchend', addOrRemoveSlash);
ListFields.addEventListener('touchcancel', addOrRemoveSlash);
ListFields.addEventListener('touchmove', addOrRemoveSlash);

window.addEventListener('click', closeLoginForm);
window.addEventListener('touchstart', closeLoginForm);
window.addEventListener('touchend', closeLoginForm);
window.addEventListener('touchcancel', closeLoginForm);
window.addEventListener('touchmove', closeLoginForm);