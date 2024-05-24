const { src, dest, watch, parallel } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();

function styles() {
    return src('app/scss/style.scss')
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function scripts() {
    return src('app/js/script.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
}
function watching() {
    watch(['app/scss/style.scss'], styles)
    watch(['app/js/script.js'], scripts)
    watch(['app/**/*.html']).on('change', browserSync.reload);

}
function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}



exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.default = parallel(styles, scripts, watching, browsersync)