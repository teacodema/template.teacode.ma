window.$ = require('jquery');
import { generateCode } from "./functions";

$(function () {

    try {
        setTimeout(() => {
            generateCode();
        }, 500);
    } catch (error) {
        console.log(error);
    }
});
