import { createCards } from "./cards.js";

import { switchMenu } from "./menu.js";
import { switchBanner } from "./banner.js";
import { createheader } from './header.js';


window.switchMenu = switchMenu
window.switchBanner = switchBanner


document.addEventListener('DOMContentLoaded', ()=>{
    createheader()
    createCards()
});