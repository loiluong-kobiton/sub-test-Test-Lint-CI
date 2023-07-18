// const gulp = require('gulp');
// const eslint = require('gulp-eslint');
// const sourcemaps = require('gulp-sourcemaps');


// gulp.task('lint', () => {
//   return gulp
//     .src(['src/**/*.js']) 
//     .pipe(eslint())
//     .pipe(eslint.format());
// });


const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src('src/index.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

