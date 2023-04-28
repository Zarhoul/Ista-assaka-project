const mix = require('laravel-mix');
const path = require('path');
const { create } = require('tailwindcss');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        create('tailwind.config.js'),
        require('autoprefixer'),
    ]);

mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
});
