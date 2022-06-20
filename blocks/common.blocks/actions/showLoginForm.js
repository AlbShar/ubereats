const modal = document.querySelector('#modal');
const btnSignIn = document.querySelector('#signIn');

function showLoginForm() {
    btnSignIn.onclick = () => {
        modal.style.display = "block";
    };
}

export {showLoginForm, modal};