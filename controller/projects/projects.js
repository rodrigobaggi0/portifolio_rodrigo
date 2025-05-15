import { createCards } from "../../view/js/projects/cards.js";

import { switchMenu } from "../../controller/menu.js";
import { switchBanner } from "../../controller/projects/banner.js";
import { createheader } from '../../view/js/header.js';


window.switchMenu = switchMenu
window.switchBanner = switchBanner


document.addEventListener('DOMContentLoaded', ()=>{
    createheader()
    createCards()
});