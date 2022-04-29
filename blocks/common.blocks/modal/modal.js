let modal = document.querySelector('#modal');


function closeModal(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click', closeModal);
window.addEventListener('touchstart', closeModal);
window.addEventListener('touchend', closeModal);
window.addEventListener('touchcancel', closeModal);
window.addEventListener('touchmove', closeModal);