import { setClassIconEye } from "./setClassIconEye.js";

export function changeTypeInput(event) {
    if (event.target.tagName !== 'I') {return;}
    setClassIconEye(event);
    event.target.previousElementSibling.type = 
    (event.target.previousElementSibling.type === "password") ? "text" : "password";
}