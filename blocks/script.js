let ul = document.querySelector('#list');
let modal = document.querySelector('#modal');
let links = document.querySelectorAll('.card__photo > a');

function closeModal(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        event.preventDefault();
    }
}


function changeIcon(event) {
    let evTrgt = event.target;
    if (evTrgt.classList.contains('fa-eye-slash')) {
        evTrgt.classList.remove('fa-eye-slash');
        evTrgt.classList.add('fa-eye');
    } else {
        evTrgt.classList.remove('fa-eye');
        evTrgt.classList.add('fa-eye-slash');
    }
    evTrgt.previousElementSibling.type = (evTrgt.previousElementSibling.type === "password") ? "text" : "password";
}



ul.addEventListener('click', changeIcon);
ul.addEventListener('touchstart', changeIcon);
ul.addEventListener('touchend', changeIcon);
ul.addEventListener('touchcancel', changeIcon);
ul.addEventListener('touchmove', changeIcon);

window.addEventListener('click', closeModal);
window.addEventListener('touchstart', closeModal);
window.addEventListener('touchend', closeModal);
window.addEventListener('touchcancel', closeModal);
window.addEventListener('touchmove', closeModal);