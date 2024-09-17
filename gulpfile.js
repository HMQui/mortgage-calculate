const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyle() {
    return src('./assets/SASS/**/*.scss')
    .pipe(sass())
    .pipe(dest('assets/CSS'))
}

function watchTask() {
    watch(['assets/SASS/**/*.scss'], buildStyle)
}

exports.default = series(buildStyle, watchTask)