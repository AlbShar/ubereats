import {listValidatPswd} from "./changeTypeInput.js";
export function stayVisibleValidateList(event) {
    if (event.target.id == 'eye1' && (listValidatPswd.classList.contains('signup__message_invisible'))) {
        listValidatPswd.classList.remove('signup__message_invisible');
        listValidatPswd.classList.add('signup__message_visible');
    }
}