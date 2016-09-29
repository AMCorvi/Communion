//
// ─── DEPENDENCIES ───────────────────────────────────────────────────────────────
//

    
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    pug = require('gulp-pug');

// Declare and set variable to take it easy on the typing. 
        // This comment not withstanding

var env,
    outputDir,
    jsSources,
    htmlSources,
    sassSources, 
    cssStyles, 
    typeScriptSources;


env = process.env.NODE_ENV || 'development'

if (env == 'development' ) {
    outputDir = 'build/dev/';
    cssStyles = 'expanded';
} else {
    outputDir = 'build/prod/';
    cssStyles = 'compressed';
};

jsSources = ["build/dev/js/*js"];
htmlSources = ['component/views/*.html'];
sassSources = ['./sass/*.scss'];
typeScriptSources = ['components/js/*.js'];




//
// ─── CONFIGURATION ──────────────────────────────────────────────────────────────
//



 
gulp.task('sass', function () {
  return gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssStyles))
    .pipe(connect.reload());

});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('reload', function(){
   gulp.src(outputDir + 'index.html')
   .pipe(connect.reload())
});


 
gulp.task('watch', function() {
 
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./build/*/*.html', ['reload']);
  gulp.watch('css/*.css', ['sass']);
});

gulp.task('default', ['connect', 'sass','watch'])