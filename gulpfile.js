var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('gulp-bower');
var connect = require('gulp-connect');
var less = require('gulp-less');


gulp.task('less', function () {
  gulp.src(['./src/less/app.less', './src/less/bootstrap.less'])
    .pipe(less()) // should use paths: [ path.join(__dirname, 'src', 'includes') ]
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  // gulp.watch(['./src/**.html'], ['html']);
  gulp.watch(['./src/less/*.less'], ['less']);
});


gulp.task('serve', ['watch'], function () {
  connect.server({
      root: ['./src', './build'],
      livereload: true
    });
});

gulp.task('jslib', function() {
  gulp.src([
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './bower_components/jquery/dist/jquery.js',
    './bower_components/underscore/underscore.js',
    './bower_components/highlight/src/highlight.js',
  ]).pipe(gulp.dest('./build/js/lib/'));
});

gulp.task('images', function () {
  gulp.src(['./src/images/**'])
  .pipe(gulp.dest('./build/images/'));
});

gulp.task('fonts', function () {
  gulp.src(['./bower_components/bootstrap/dist/fonts/**', './src/fonts/**'])
  .pipe(gulp.dest('./build/fonts/'));
});

gulp.task('build', ['images', 'fonts', 'less', 'jslib'], function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build/'));
});
