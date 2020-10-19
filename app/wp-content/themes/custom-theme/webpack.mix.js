const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass("styles/app.scss", "styles/app.css").browserSync({
  open: false,
  notify: false,
  port: 8000,
  ui: {
    port: 8001
  },
  proxy: "wordpress",
  files: ["**/*.php", "styles/app.css", "style.css"]
});
