import * as wmRoot from "./modules/root.js"
import * as wmFunctions from "./modules/functions.js"

wmRoot.isWebp();
wmRoot.project();

wmFunctions.burgerMenu();
wmFunctions.prodSliderMobile();
wmFunctions.prSliderMobile();
wmFunctions.passSliderMobile();
wmFunctions.variantSliderMobile();

const households = document.querySelector('.households');

wmFunctions.tabs(households);
wmFunctions.pageNav();
wmFunctions.newMob();
wmFunctions.reviewsSlider();
wmFunctions.shop();
wmFunctions.filterButton();
wmFunctions.hilfeBlock();
wmFunctions.techBlock();
wmFunctions.detailSliderMobile();
