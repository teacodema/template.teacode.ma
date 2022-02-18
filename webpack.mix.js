const mix = require('laravel-mix');
require('laravel-mix-purgecss');
mix.pug = require('laravel-mix-pug');

mix
    .copy('src/dist/fonts', 'dist/fonts')
    .copy('src/dist/assets', 'dist/assets')
    .js('./src/js/app.js', 'dist/js')
    .sass('./src/sass/externals.sass', 'css')
    .sass('./src/sass/app.sass', 'css')
    .pug('src/views/*.pug', '../../dist')
    .setPublicPath('./dist')
    // .purgeCss({
    //     extend: {
    //         content: [path.join(__dirname, 'database/data/**/*.json')],
    //     },
    // })
    // .postCss()

    .sourceMaps(true, 'source-map')

    /* Tools */
    .browserSync({server: 'dist', proxy: null})
    // .disableNotifications()
    /* Options */
    // .options({
    //     processCssUrls: false
    // })
    ;


if (mix.inProduction()) {
    mix.version();
}
