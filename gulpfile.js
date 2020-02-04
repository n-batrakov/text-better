const gulp = require('gulp')
const concat = require('gulp-concat');
const postcss = require('gulp-postcss')
const connect = require('gulp-connect')
const pug = require('gulp-pug')
const { postcssPlugins, ...postcssConfig } = require('./postcss.config')

const html = () =>
    gulp.src('src/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())


const css = () => gulp.src('src/**/*.scss')
    .pipe(postcss(postcssPlugins, postcssConfig))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())

const build = gulp.parallel(html, css)


const watch = () => gulp.watch('src/**/*', build)

const serve = () => connect.server({
    root: 'dist',
    livereload: true,
})

const start = gulp.parallel(build, serve, watch)


module.exports = { build, start, default: start }
