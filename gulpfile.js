var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minify = require('gulp-babel-minify');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  js: 'js/src/**',
  scss: 'scss/**',
};

gulp.task('default', function () {
  gulp.watch(paths.scss, gulp.parallel('scss'));
  gulp.watch(paths.js, gulp.parallel('minify_js'));
});

gulp.task('minify_js', function () {
  return gulp.src('js/src/*.js')
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.js'
      }
    })).pipe(gulp.dest('js/build/'))
});

gulp.task('scss', function () {
  return gulp.src('scss/styles.scss')
    .pipe(sourcemaps.init({
      loadMaps: true,
      identifyMap: true
    }))
    .pipe(sass())
    .pipe(sourcemaps.write('.', {
      sourceRoot: 'css'
    }))
    .pipe(gulp.dest('css'));
});