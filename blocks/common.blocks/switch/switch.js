const switchSlider = document.querySelector('#switch');

function changeTheme() {
        switchSlider.addEventListener('click', function toggleButton() {
        document.body.classList.toggle('dark-theme');
        if (switchSlider.getAttribute('aria-checked') == 'true') {
            switchSlider.setAttribute('aria-checked', false);
        } else {
            switchSlider.setAttribute('aria-checked', true);
        }
    } );
}


export {switchSlider, changeTheme};


