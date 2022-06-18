"use strict";
const clickEvent = ('click' || 'touchstart' || 'touchend' || 'touchcancel' || 'touchmove');

import { listInputs, listValidatPswd, changeTypeInput} from "./blocks/signup/__input/changeTypeInput.js";
import { showValidateList} from "./blocks/signup/__message/showValidateList.js";
import {hideValidateList} from "./blocks/signup/__message/hideValidateList.js";
import {validatePassword} from "./blocks/signup/__input/validatePassword.js";
import {checkPasswords} from "./blocks/signup/__input/checkPasswords.js";


listInputs.addEventListener(clickEvent, changeTypeInput);
validatePassword();
checkPasswords();
showValidateList();
hideValidateList();


