// window._ = require('lodash');
import { drawBrandText, initParticlesJS, initDarkMode, initActions } from "/functions.js";

$(function () {
    try {
        drawBrandText();
        initParticlesJS();
        initActions();
        initDarkMode(); 
    } catch (error) {
        console.log(error);
    }
});
