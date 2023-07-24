
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src('src/index.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    // .pipe(jshint.reporter('fail')) // Fail task if there are linting errors
    ;

});

