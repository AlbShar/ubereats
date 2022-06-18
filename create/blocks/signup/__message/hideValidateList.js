import {firstPswdInput} from "./showValidateList.js";
import {listValidatPswd} from "../__input/changeTypeInput.js";


export function hideValidateList() {
    firstPswdInput.onblur = () => {
        listValidatPswd.classList.remove('signup__message_visible');
        listValidatPswd.classList.add('signup__message_invisible');
    };
}