'use strict'
/**
 * gulpfile.js
 * (c) Adexos <contact@adexos.fr>
 */

/**
 * Configuration loading.
 */
var config = require('./gulpconfig');

/**
 * Gulp & plugins loading.
 */
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var buffer       = require('vinyl-buffer');
var cache        = require('gulp-cache');
var cleancss     = require('gulp-cleancss');
var imagemin     = require('gulp-imagemin');
var sass         = require('gulp-sass');
var spritesmith  = require('gulp.spritesmith');
var svgmin       = require('gulp-svgmin');
var svgstore     = require('gulp-svgstore');
var path         = require('path');
var kss = require('kss');
var uglify = require('gulp-uglify');
var pump = require('pump');

/**
 * BrowserSync.
 */
gulp.task('browserSync', function() {
    browserSync.init(config.browserSync);
});

/**
 * Sass compiler, then live reload by BrowserSync.
 */
gulp.task('sass', function() {
    return gulp
        .src(config.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(cleancss())
        //.pipe(cmq(config.cmq))
        .pipe(gulp.dest(config.dest.css))
        .pipe(browserSync.reload({stream: true}))
        ;
});

/**
 * Image optimizer.
 */
gulp.task('images', function() {
    return gulp
        .src(config.src.images)
        .pipe(cache(imagemin(config.imagemin)))
        .pipe(gulp.dest(config.dest.images))
        ;
});

/**
 * Sprite generator.
 */
gulp.task('sprites', function() {
    var spriteConfig, src, spriteData;

    var clone = function (key) {
        spriteConfig[key] = config.src.sprites[key];
    };

    for (var name in config.src.sprites) {
        if (config.src.sprites.hasOwnProperty(name)) {
            // Config cloning required by spritesmith's CSS generation.
            spriteConfig = {};
            Object.keys(config.src.sprites).forEach(clone);

            // Options building
            src = spriteConfig[name];
            spriteConfig.cssName = '_' + name + '.scss';
            spriteConfig.imgName = name + '.' + src[0].slice(-3);
            spriteConfig.imgPath = config.httpPath + config.dest.sprites + '/' + spriteConfig.imgName;

            // Running the sprite generator
            spriteData = gulp.src(src).pipe(spritesmith(spriteConfig));
            spriteData.img.pipe(buffer()).pipe(imagemin(config.imagemin)).pipe(gulp.dest(config.dest.sprites));
            spriteData.css.pipe(gulp.dest(config.dest.scss));
        }
    }
});

gulp.task('buildicons', function () {
    return gulp.src(config.src.icons)
        .pipe(svgmin(function getOptions (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    },
                    convertStyleToAttrs: true
                }]
            }
        }))
        .pipe(svgstore({ inlineSvg: true, cleanDefs: true, cleanObjects: true }))
        .pipe(gulp.dest(config.dest.icons));
});

gulp.task('styleguide', function () {
    return kss(config.styleGuide);
});

/**
 * Gulp watcher.
 */
gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.src.scss, ['sass', 'styleguide']);
    gulp.watch(config.liveReload, browserSync.reload);
});

gulp.task('compressjs', function (cb) {
    pump([
            gulp.src(config.src.js),
            uglify(),
            gulp.dest(config.dest.js)
        ],
        cb
    );
});
