//
// ─── DEPENDENCIES ───────────────────────────────────────────────────────────────
//

    
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');
    

// Declare and set variable to take it easy on the typing. 
        // This comment not withstanding

var env,
    outputDir,
    jsSources,
    angCtrlSrcs,
    angSvcsSrcs,
    angCtrlDest,
    angSvcDest,
    htmlSources,
    imageDest,
    imageSources,
    sassSources, 
    sassStyles,
    cssDest;


env = process.env.NODE_ENV || 'development'

if (env == 'development' ) {
    outputDir = 'build/dev/';
    sassStyles = 'expanded';
    cssDest = outputDir + '/css';
    angCtrlDest = outputDir + '/scripts/controllers/';
    angSvcDest = outputDir + '/scripts/services/';
    imageDest = outputDir + 'images';
} else {
    outputDir = 'build/prod/';
    sassStyles = 'compressed';
    cssDest = outputDir + '/css';
    angCtrlDest = outputDir + '/scripts/controllers/';
    angSvcDest = outputDir + '/scripts/services/';
    imageDest = outputDir + '/images';
};

jsSources = ['./src/scripts/*.js'];
angCtrlSrcs = ['./src/scripts/controllers/*.js'];
angSvcSrcs = ['./src/scripts/services/*.js'];
htmlSources = ['./src/*.html'];
sassSources = ['./src/sass/*.scss'];
imageSources = './src/images/*';




//
// ─── CONFIGURATION ──────────────────────────────────────────────────────────────
//

gulp.task('loadInHtml', 
() => gulp.src(htmlSources).pipe(gulp.dest(outputDir))
);

 


gulp.task('pic-min', function (){
    return gulp.src(imageSources)
        .pipe(imagemin())
        .pipe(gulp.dest(imageDest))
});
 
gulp.task('sass', function () {
  return gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssDest))
    .pipe(connect.reload());

});

 gulp.task('loadjs', function(){
     return gulp.src('./src/scripts/*.js')
     .pipe(gulp.dest(outputDir));

 });

  gulp.task('load-ngSvcs', function(){
     return gulp.src(angSvcSrcs)
     .pipe(gulp.dest(angSvcDest));
 });

 gulp.task('load-ngCtrls', function(){
     return gulp.src(angCtrlSrcs)
     .pipe(gulp.dest(angCtrlDest));
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
  gulp.watch(jsSources , ['loadjs']);
  gulp.watch(angSvcSrcs, ['load-ngSvcs']);
  gulp.watch(angCtrlSrcs, ['load-ngCtrls']);
  gulp.watch(outputDir + '*.html', ['reload']);
  gulp.watch(sassSources, ['sass']);
});

gulp.task('default', ['connect', 'pic-min','sass', 'loadjs','load-ngCtrls','load-ngSvcs','watch']);