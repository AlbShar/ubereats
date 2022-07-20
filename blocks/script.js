"use strict";
let clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');
const listFields = document.querySelector('#list');

import {searchCard} from "./project.blocks/search-form/searchCard.js";
import { closeLoginForm } from "./common.blocks/form/closeLoginForm.js";
import { changeTypeInput } from "./common.blocks/form/changeTypeInput.js";
import { showLoginForm } from "./common.blocks/actions/showLoginForm.js";
import {changeTheme} from "./common.blocks/switch/switch.js";
import {toggleBurger} from "./common.blocks/burger/burger.js";

showLoginForm();
searchCard();
changeTheme();
toggleBurger();
window.addEventListener('click', closeLoginForm);
window.addEventListener('touchstart', closeLoginForm);
window.addEventListener('touchend', closeLoginForm);
window.addEventListener('touchcancel', closeLoginForm);
window.addEventListener('touchmove', closeLoginForm);
listFields.addEventListener(clickEvent, changeTypeInput);


