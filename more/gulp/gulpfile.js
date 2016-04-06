
var gulp= require('gulp'),
  debug= require('gulp-debug'),
  gutil= require('gulp-util'),
  jshint= require('gulp-jshint'),
  jshintStylish= require('jshint-stylish'),
  cssmin= require('gulp-minify-css'),
  concat= require('gulp-concat'),
  addSrc= require('gulp-add-src'),
  gfilter= require('gulp-filter'),
  rename= require('gulp-rename'),
  gheader= require('gulp-header'),
  gcache= require('gulp-cached'),
  myUtils= require('./utils'),
  tsc= require('gulp-tsc')
  server= myUtils.getServer();

var globs= myUtils.globs,
    appJsGlobs=globs.appJsGlobs,
    appTsGlobs=globs.appTsGlobs,
    appDefTsGlobs= globs.appDefTsGlobs,
    appCssGlobs= globs.appCssGlobs,
    appImages= globs.appImages,
    appStaticResources= globs.appStaticResources;

var targetAppName= myUtils.getPackage().name;

gulp.task('express', function(cb){
  server.listen(8080, function(){
    gutil.log('server listening on 8080');
    cb();
  });
});


gulp.task('compileTs', function(cb){
  gutil.log('Compile ts'); 
  return gulp.src(appTsGlobs)
  .pipe(gcache('tscache'))
  .pipe(addSrc(appDefTsGlobs))
  .pipe(tsc(myUtils.getTsCompilerOptions()))
  .pipe(debug())
  .pipe(gulp.dest(myUtils.getOutputCompilationFolder()));
});

gulp.task('copyResources', function(cb){
  return gulp.src(appStaticResources)
  .pipe(gulp.dest(myUtils.constants.destTs));
});

gulp.task('watchTs', function(){
  gutil.log('watching ts files');
  gulp.watch(appTsGlobs, ['compileTs']);
});

gulp.task('watchStatic', function(){
  gulp.watch(appStaticResources, ['copyResources']);
});

gulp.task('dev', ['compileTs', 'express', 'watchTs'], function(cb){});



gulp.task('default', ['build']);


