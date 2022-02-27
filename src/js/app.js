window.$ = require('jquery');
import { drawBrandText, initParticlesJS, initDarkMode, initGlobalActions } from "./functions";

$(function () {

    try {
        initGlobalActions();
        drawBrandText();
        initParticlesJS();
        initDarkMode();
    } catch (error) {
        console.log(error);
    }
});
