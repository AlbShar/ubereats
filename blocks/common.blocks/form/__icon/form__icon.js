let ul = document.querySelector('#list');
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