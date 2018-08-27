const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('prefix', function() {
  gulp
    .src('src/css/style.css')
    .pipe(autoprefixer({ browsers: ['last 4 versions'], cascade: false }))
    .pipe(gulp.dest('dist/css'))
    .on('error', err => console.log(`ERR: ${err}`))
})

gulp.task('watch-css', () => {
  gulp.watch('src/css/*.css', ['prefix'])
})
