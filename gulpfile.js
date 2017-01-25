//
// ─── DEPENDENCIES ───────────────────────────────────────────────────────────────
//


// NOTE: prefixer needs to be added to 'SASS' task but is currently being ...
// withheld for editing & readablity purposes.

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  nodemon = require('gulp-nodemon'),
  bsync = require('browser-sync').create();


// Declare and set variable to take it easy on the typing. 
  // This comment not withstanding

var env,
  outputDir,
  jsSources,
  angCtrlSrcs,
  angCtrlDest,
  viewSources,
  imageDest,
  imageSources,
  sassSources,
  sassStyles,
  cssDest;


env = process.env.NODE_ENV || 'development'

if (env == 'development') {
  outputDir = 'build/dev/';
  sassStyles = 'expanded';
  cssDest = outputDir + '/css';
  angCtrlDest = outputDir + '/scripts/controllers/';
  imageDest = outputDir + 'images';
} else {
  outputDir = 'build/prod/';
  sassStyles = 'compressed';
  cssDest = outputDir + '/css';
  angCtrlDest = outputDir + '/scripts/controllers/';
  imageDest = outputDir + '/images';
}
;

jsSources = ['./src/scripts/*.js'];
angCtrlSrcs = ['./src/scripts/controllers/*.js'];
viewSources = ['./src/views/*.pug', './src/views/partials/*.pug'];
sassSources = ['./src/sass/*.sass', './src/sass//partials/*.sass'];
imageSources = './src/images/*';




//
// ─── CONFIGURATION ──────────────────────────────────────────────────────────────
//





gulp.task('pic-min', function() {
  return gulp.src(imageSources)
    .pipe(imagemin())
    .pipe(gulp.dest(imageDest))
});

gulp.task('sass', function() {
  return gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssDest))

});

gulp.task('loadjs', function() {
  return gulp.src('./src/scripts/*.js')
    .pipe(gulp.dest(outputDir));

});


gulp.task('load-ngCtrls', function() {
  return gulp.src(angCtrlSrcs)
    .pipe(gulp.dest(angCtrlDest));
});

gulp.task('bsync', function() {
  bsync.init({
    proxy: "nichi.red:3005"
  })
});

gulp.task('node', function() {
  nodemon({
    script: 'app.js',
    ext: 'js html pug sass',
    env: {
      'NODE_ENV': process.env.NODE_ENV || 'development'
    }
  }).on('start', function() {

    setTimeout(bsync.reload, 2500);
  })
});

gulp.task('watch', function() {
  gulp.watch(imageSources, ['pic-min']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(jsSources, ['loadjs']);
  gulp.watch(angCtrlSrcs, ['load-ngCtrls']);
  gulp.watch(outputDir + '*.html', ['reload']);
  gulp.watch(sassSources, ['sass']);
});

gulp.task('default', ['bsync', 'pic-min', 'sass', 'loadjs', 'load-ngCtrls', 'watch', 'node']);