'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browerSync = require('browser-sync').create();
var browserify = require('browserify');
var watchify = require('watchify');
var minifyCss = require('gulp-clean-css');
var fs = require('fs');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('browerSync', function(){
  browerSync.init({
      server: {
          baseDir: "./"
      }
  });
});

gulp.task('concat', function(){
  return gulp.src([
      'app/**/*module.js',
      'app/**/*.js',
      '!app/app.js'
    ]).
    pipe(concat('app.js')).
    pipe(gulp.dest('./app'));
});

gulp.task('scss', function(){
 return gulp.src('./assets/scss/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./assets/css/'))
  .pipe(browerSync.stream());
});

gulp.task('minify', function(){
  gulp.src('./assets/css/main.css')
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(minifyCss())
  .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', ['concat', 'browerSync'], function() {

  gulp.watch('app/**/*.js', ['concat']);
  gulp.watch('app/app.js', browerSync.reload);
  gulp.watch('app/**/*.css', browerSync.reload);
  gulp.watch('app/**/*.html', browerSync.reload);
  gulp.watch('index.html', browerSync.reload);


  gulp.watch('assets/scss/**/*.scss', ['scss']);
});
