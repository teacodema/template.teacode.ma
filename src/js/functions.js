require('particles.js');
window.$ = require('jquery');

const toggleDarkMode = function (button, isActive, _body) {
    if (isActive) {
        _body.addClass('dark-mode').removeClass('light-mode');
        button.addClass('dark-mode').removeClass('light-mode');
        $('.icon-mode').addClass('dark-mode').removeClass('light-mode');
        setCookie('mode', 'dark');
    } else {
        _body.removeClass('dark-mode').addClass('light-mode');
        button.removeClass('dark-mode').addClass('light-mode');
        $('.icon-mode').removeClass('dark-mode').addClass('light-mode');
        setCookie('mode', 'light');
    }
}

const setCookie = function(name, value) {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

const initActions = function() {
    $('.banner-close').on('click', function () {
        $('.banner').remove();
    });
}

const initDarkMode = function () {
    let _body = $(document.body);
    $(document).on('click', '.toggle-dark-mode', function () {
        let _this = $(this);
        let _isActive = !_body.hasClass('dark-mode');
        // let _isActive = localStorage.getItem('isDarkModeActive');
        _this.addClass('pushed');
        setTimeout(() => {
            _this.removeClass('pushed');
        }, 300);
        toggleDarkMode(_this, _isActive, _body);
    });
}

const drawBrandText = function() {
    let text = `
     /$$                                                   /$$
    | $$                                                  | $$
   /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$$  /$$$$$$
  |_  $$_/   /$$__  $$ |____  $$ /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$
    | $$    | $$$$$$$$  /$$$$$$$| $$      | $$  \\ $$| $$  | $$| $$$$$$$$
    | $$ /$$| $$_____/ /$$__  $$| $$      | $$  | $$| $$  | $$| $$_____/
    |  $$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$
     \\___/   \\_______/ \\_______/ \\_______/ \\______/  \\_______/ \\_______/
    `;
    console.log(text);
}

const initParticlesJS = function () {
    if ($('#particles-js').length) {
        // setTimeout(() => {
        //     $('.loader-wrapper').addClass('disappear');
        // }, 500);
        particlesJS.load('particles-js', './assets/plugins/particles/particles.min.json');
    }
}

export { drawBrandText, initParticlesJS, initDarkMode, initActions };
