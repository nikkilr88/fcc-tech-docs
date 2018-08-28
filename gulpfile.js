const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')

gulp.task('prefix', () => {
  gulp
    .src('src/css/style.css')
    .pipe(autoprefixer({ browsers: ['last 4 versions'], cascade: false }))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('watch-css', () => {
  gulp.watch('src/css/*.css', ['prefix'])
})
