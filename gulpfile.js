var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');

var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var lessify = require('node-lessify');

var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
    browserify('./src/app.js')
        .transform(babelify)
        .transform(reactify)
        .transform(lessify)
        .transform('varlessify', { file: './src/variables.less' })
        .bundle()
          .on('error', function(err) {
              gutil.log(err);
          })
        .pipe(source('./src/app.js'))
        .pipe(streamify(concat('bundle.js')))
        .pipe(streamify(uglify({
            mangle: true,
        })))
        .pipe(gulp.dest('dist'))
})

gulp.task('less', function() {
    gulp.src('./src/components/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./assets/css'))
})

gulp.task('server', function() {
    connect.server({
        root: './',
        livereload: true
    });    
})

gulp.task('reload', function() {
    gulp.src('dist/bundle.js')
        .pipe(connect.reload())
})

gulp.task('watch', function() {
    gulp.watch('src/**/*', ['build', 'less', 'reload'])
})

gulp.task('default', ['build'])
gulp.task('develop', ['server', 'watch'])

