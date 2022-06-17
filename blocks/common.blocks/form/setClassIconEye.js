export function setClassIconEye(event) {
    if (event.target.classList.contains('fa-eye-slash')) {
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye');
    } else {
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');
    }
}