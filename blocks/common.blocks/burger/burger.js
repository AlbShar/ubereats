const burger = document.querySelector('#burger');
const nav = document.querySelector('#menu');
const navItems = nav.querySelectorAll('[data-about="actions_item"]');
const basketWrapper = document.querySelector('#basketWrapper');
const basketText = document.createElement('div');
const switchText = document.createElement('div');
const iconRegistr = document.createElement('span');
const iconSignIn = document.createElement('span');
const switchWrapper = document.querySelector('#switchWrapper');
const registWrapper = document.querySelector('#registWrapper');
const signInWrapper = document.querySelector('#signInWrapper');
let clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');


function toggleBurger() {
    burger.addEventListener(clickEvent ,() => {
    document.body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger_active');
    nav.classList.toggle('actions_visible');

    basketText.innerHTML = "Корзина";
    basketText.className = 'actions__basket-text';
    basketWrapper.append(basketText);

    switchText.innerHTML = "Сменить тему";
    switchText.className = 'switch__text';
    switchWrapper.append(switchText);

    iconRegistr.style.transform = 'scale(1.3)';
    iconRegistr.className = 'fa fa-user-plus';
    iconRegistr.style.marginLeft = '22px';
    iconRegistr.style.marginRight = '13px';
    iconRegistr.style.filter = 'var(--filter)';
    registWrapper.prepend(iconRegistr);

    iconSignIn.style.transform = 'scale(1.5)';
    iconSignIn.className = 'fa fa-user-circle';
    iconSignIn.style.marginLeft = '20px';
    iconSignIn.style.marginRight = '10px';
    iconSignIn.style.filter = 'var(--filter)';
    signInWrapper.prepend(iconSignIn);

});
    
    navItems.forEach(el => {
        el.addEventListener('click', () => {
            document.body.classList.remove('stop-scroll');
            burger.classList.remove('burger_active');
            nav.classList.remove('actions_visible');
            basketText.remove();
            switchText.remove();
            iconRegistr.remove();
            iconSignIn.remove();
        });
    });
}

export {toggleBurger};
