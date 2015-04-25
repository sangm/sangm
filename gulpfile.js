var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');

var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');

gulp.task('build', function() {
    browserify('./src/app.js')
        .transform(babelify)
        .transform(reactify)
        .bundle()
        .pipe(source('./src/app.js'))
        .pipe(streamify(concat('bundle.js')))
        .pipe(gulp.dest('dist'))
})

gulp.task('server', function() {
    connect.server({
        root: './',
        livereload: true
    });    
})

gulp.task('reload', function() {
    gulp.src('src/**/*.js')
        .pipe(connect.reload())
})

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build', 'reload'])
})

gulp.task('default', ['build'])
gulp.task('develop', ['server', 'watch'])

