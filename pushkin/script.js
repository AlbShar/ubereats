"use strict";

import {showLoginForm} from  "../blocks/common.blocks/actions/showLoginForm.js";
import { closeLoginForm } from "../blocks/common.blocks/form/closeLoginForm.js";
import  { changeTypeInput } from "../blocks/common.blocks/form/changeTypeInput.js";
import {slider} from "./blocks/mobile.blocks/slider/slider.js";
import  {linkItems, checkoutTabs} from "./blocks/desktop.blocks/menu/checkoutTabs.js";
import {changeTheme} from "../blocks/common.blocks/switch/switch.js"
let clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');

const listFields = document.querySelector('#list');

slider();
showLoginForm();
changeTheme();
linkItems.forEach(checkoutTabs);
listFields.addEventListener(clickEvent, changeTypeInput);


window.addEventListener('click', closeLoginForm);
window.addEventListener('touchstart', closeLoginForm);
window.addEventListener('touchend', closeLoginForm);
window.addEventListener('touchcancel', closeLoginForm);
window.addEventListener('touchmove', closeLoginForm);