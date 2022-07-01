const switchSlider = document.querySelector('#switch');

function changeTheme() {
    switchSlider.addEventListener('click', () => document.body.classList.toggle('dark-theme'));
}


export {switchSlider, changeTheme};