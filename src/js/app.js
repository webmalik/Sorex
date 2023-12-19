import * as wmRoot from "./modules/root.js"
import * as wmFunctions from "./modules/functions.js"

wmRoot.isWebp();
wmRoot.project();

wmFunctions.burgerMenu();
wmFunctions.prodSliderMobile();

const households = document.querySelector('.households');

wmFunctions.tabs(households);
wmFunctions.pageNav();
wmFunctions.newMob();
