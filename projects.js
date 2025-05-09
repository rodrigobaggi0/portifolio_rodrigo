import { createheader } from "./header.js";
import { switchMenu } from "./menu.js";
import { switchBanner } from './banner.js';

window.switchMenu = switchMenu
window.switchBanner = switchBanner

document.addEventListener ('DOMContentLoaded', ()=>{
    createheader()
});