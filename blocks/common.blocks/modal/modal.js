let modal = document.querySelector('#modal');


function closeModal(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click', closeModal);