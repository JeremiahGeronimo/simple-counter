'use strict';

let gulp = require('gulp'),
    babel = require('gulp-babel'),
    less = require('gulp-less'),
    webpack = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js'),
    rename = require('gulp-rename');


gulp.task('default', ['build']);

gulp.task('build', ['styles', 'html', 'fonts', 'scripts']);

gulp.task('scripts', function () {
    return (
        gulp
            .src('./src/scripts/index.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest('./dist/js/'))
    )
});

gulp.task('styles', function () {
    return (
        gulp
            .src('./src/styles/style.less')
            .pipe(less())
            .pipe(gulp.dest('./dist/css/'))
    )
});

gulp.task('html', function () {
    return (
        gulp
            .src('./src/index.html')
            .pipe(gulp.dest('./dist/'))
    )
});

gulp.task('fonts', function () {
    return (
        gulp
            .src('./node_modules/uikit/dist/fonts/**/*.{ttf,woff,woff2,otf,eot}')
            .pipe(gulp.dest('./dist/fonts/'))
    )
});

gulp.task('minify', ['build'], function () {
    let nano = require('gulp-cssnano'),
        uglify = require('gulp-uglify');

    gulp.src(['./dist/css/style.css', '!./dist/css/style.min.css'])
        .pipe(rename({suffix: '.min'}))
        .pipe(nano())
        .pipe(gulp.dest('./dist/css'))
        .on('end', () => {

            gulp.src(['./dist/js/index.js', '!./dist/js/index.min.js'])
                .pipe(rename({suffix: '.min'}))
                .pipe(uglify())
                .pipe(gulp.dest('./dist/js'))
        })
});
