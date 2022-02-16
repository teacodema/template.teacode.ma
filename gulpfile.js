const { src, dest, watch } = require("gulp");

const sass = require('gulp-sass')(require('sass'));
exports.css = function() {
    return src("./imports/sass/*.sass")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./dist/css/"));
}

const concat = require("gulp-concat");
exports.js = function() {
    return src("./imports/js/app.js")
        .pipe(concat("app.js"))
        .pipe(dest("./dist/js/"));
}

const pug = require("gulp-pug");
exports.html = function() {
    return src("./*.pug")
        .pipe(pug({pretty: true,}))
        .pipe(dest("."));
}

exports.watch = function() {
    watch("./imports/sass/*.sass", exports.css);
    watch("./*.pug", exports.html);
    watch("./imports/js/app.js", exports.js);
};