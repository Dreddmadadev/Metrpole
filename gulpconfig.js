/**
 * gulpconfig.js
 * (c) Adexos <contact@adexos.fr>
 */

//
// Directories
//
var SOURCE_THEME_DIR = 'skin/frontend/default/theme338k';
var DIST_THEME_DIR = 'skin/frontend/default/theme338k';

//styles
var SCSS_DIR = SOURCE_THEME_DIR + '/scss';
var CSS_DIR = DIST_THEME_DIR + '/css';
var SOURCEJS_DIR = SOURCE_THEME_DIR + '/sourcejs';
var JS_DIR = DIST_THEME_DIR + '/js';
var IMG_SRC_DIR = SOURCE_THEME_DIR + '/assets/images/to-optimize';
var IMG_DST_DIR = SOURCE_THEME_DIR + '/assets/images';

module.exports = {
    /**
     * Source folders.
     * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options}
     */
    src: {
        images:  [IMG_SRC_DIR + '/**/*.+(png|jpg|gif|svg)'],
        scss_dir: SCSS_DIR,
        scss:    [SCSS_DIR + '/**/*.scss'],
        scss_main:    [SCSS_DIR + '/style.scss'],
        js:    [SOURCEJS_DIR + '/**/*.js']
    },

    /**
     * Destination folders.
     * @see {@link https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath-options}
     */
    dest: {
        images:  IMG_DST_DIR,
        css:     CSS_DIR,
        js: JS_DIR
    },

    /**
     * Live reload
     * Set here the files that have to be sync with the browser(s) when edited.
     */
    liveReload: ['src/js/**/*.js'],

    /**
     * HTTP path of the website/application root.
     * Used by spritesmith to generate URLs for the background-url declaration. Most often, leave "/".
     */
    httpPath: '/',

    /**
     * Autoprefixer.
     * @see {@link https://www.npmjs.com/package/gulp-autoprefixer}
     */
    autoprefixer: {
        browsers: ['> 1%', 'ie >= 9'],
        cascade:  false
    },

    /**
     * gulp-combine-media-queries
     * @see {@link https://www.npmjs.com/package/gulp-combine-media-queries}
     */
    cmq: {
        log: true,
        use_external: false
    },

    /**
     * BrowserSync.
     * @see {@link https://browsersync.io/docs/options/}
     */
    browserSync: {
        proxy: 'optima.local/'
    },

    /**
     * Image optimizer
     * @see {@link https://www.npmjs.com/package/gulp-imagemin}
     */
    imagemin: {}
};
