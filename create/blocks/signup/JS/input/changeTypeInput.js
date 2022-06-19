import { setClassIconEye } from "./setClassIconEye.js";
import { stayVisibleValidateList } from "./stayVisibleValidateList.js";
const listValidatPswd = document.querySelector("#message");
const listInputs = document.querySelector('.signup__list');

function changeTypeInput(event) {
    if (event.target.classList.contains('signup__icon-eye')) {
        setClassIconEye(event);
        stayVisibleValidateList(event);

        event.target.previousElementSibling.type = 
        (event.target.previousElementSibling.type === "password") ? "text" : "password";
    }
}

export {listInputs, listValidatPswd, changeTypeInput};

