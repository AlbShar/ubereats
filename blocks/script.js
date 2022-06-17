"use strict";
let clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');
const listFields = document.querySelector('#list');

import {searchCard} from "./project.blocks/search-form/searchCard.js";
import { closeLoginForm } from "./common.blocks/form/closeLoginForm.js";
import { changeTypeInput } from "./common.blocks/form/changeTypeInput.js";

searchCard();
window.addEventListener('click', closeLoginForm);
window.addEventListener('touchstart', closeLoginForm);
window.addEventListener('touchend', closeLoginForm);
window.addEventListener('touchcancel', closeLoginForm);
window.addEventListener('touchmove', closeLoginForm);
listFields.addEventListener(clickEvent, changeTypeInput);


