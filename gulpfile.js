//
// ─── DEPENDENCIES ───────────────────────────────────────────────────────────────
//

    
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug');

// Declare and set variable to take it easy on the typing. 
        // This comment not withstanding

var env,
    outputDir,
    jsSources,
    htmlSources,
    sassSources, 
    sassStyles, 
    typeScriptSources;


env = process.env.NODE_ENV || 'developement'

if (env === 'development' ) {
    outputDir = 'build/dev/';
    sassStyles = 'expanded';
} else {
    outputDir = 'build/prod';
    sassStyles = 'compressed';
};

jsSources = ["build/dev/js/*js"];
htmlSources = ['component/views/*.html'];
sassSources = ['css/*.scss'];
typeScriptSources = ['components/js/*.js'];




//
// ─── CONFIGURATION ──────────────────────────────────────────────────────────────
//


gulp.task('build-html', function(){
    return gulp.src(jsSources)
        .pipe(pug({}))
        .pipe(gulp.dest(outputDir + 'views/'));

});
    