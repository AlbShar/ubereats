let modal = document.querySelector('#modal');
let links = document.querySelectorAll('.card__photo > a');

function closeModal(event) {
    if (event.target == modal) {
        for (let i = 0; i < links.length; i++) {
            links[i].href = '';
            links[i].target = '';
        }
        modal.style.display = 'none';
    }
}

window.addEventListener('click', closeModal);
window.addEventListener('touchend', closeModal);
window.addEventListener('touchcancel', closeModal);
window.addEventListener('touchmove', closeModal);