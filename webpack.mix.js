let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['jquery', 'vue']);

mix.less('resources/assets/less/app.less', 'public/css/vendor.css');
mix.sass('resources/assets/sass/app.scss', 'public/css/app.css');

mix.webpackConfig({
    output: {
        chunkFilename: './js/bundles/[name].bundle.js',
    }
});
mix.browserSync({
  proxy: 'cms.com'
})

