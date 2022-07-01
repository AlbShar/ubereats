const modal = document.querySelector('#modal');
const btnSignIn = document.querySelector('#signIn');
const form = document.querySelector('#loginForm');

function showLoginForm() {
    btnSignIn.onclick = () => {
        modal.style.display = "block";
        form.removeAttribute('role');
    };
}

export {showLoginForm, modal};