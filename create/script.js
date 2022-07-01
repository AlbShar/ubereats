"use strict";
const clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');

import { listInputs, changeTypeInput} from "./blocks/signup/JS/input/changeTypeInput.js";
import { showValidateList} from "./blocks/signup/JS/message/showValidateList.js";
import {hideValidateList} from "./blocks/signup/JS/message/hideValidateList.js";
import {validatePassword} from "./blocks/signup/JS/input/validatePassword.js";
import {checkPasswords} from "./blocks/signup/JS/input/checkPasswords.js";
import {changeTheme} from "../blocks/common.blocks/switch/switch.js";


listInputs.addEventListener(clickEvent, changeTypeInput);
validatePassword();
checkPasswords();
showValidateList();
hideValidateList();
changeTheme();


