let closeLoginForm = (event) => {
    const modalLoginForm = document.querySelector('#modal');
    const iconClose = document.querySelector('#close');
    const pswdInput = document.querySelector('#pwd');

    if (event.target == modalLoginForm || event.target == iconClose) {
        modalLoginForm.style.display = 'none';
        pswdInput.value = '';
        event.preventDefault();
    }
};


export {closeLoginForm};