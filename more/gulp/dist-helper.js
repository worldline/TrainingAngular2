'use strict';

let utils= require('./utils'),
	jspm= require('gulp-jspm'),
	grename= require('gulp-rename'),
	gfilter= require('gulp-filter'),
	debug = require('gulp-debug'),
	save= require('gulp-save'),
	htmlReplace= require('gulp-html-replace'),
	rimraf= require('rimraf');

class DistHelper{

	constructor(gulp){
		this.gulp= gulp;
	}

	registerTasks(){

		let gulp= this.gulp;
		let bundleFilename= 'bundle.js';
		// let systemJs= 'jspm_packages/system.js';

		gulp.task('rmdist', function(cb){
			rimraf(utils.distFolder, cb);
		});

		gulp.task('jspm', ['compileTs', 'rmdist'], function(){

			let appEntryPointFilter= gfilter(utils.globs.appEntryPoint, {restore: true});

			return gulp.src(utils.globs.appEntryPoint)
			.pipe(appEntryPointFilter)
			.pipe(jspm())
			.pipe(grename(bundleFilename))
			.pipe(gulp.dest(utils.distFolder));


		});

		gulp.task('copyAndUpdateResources', ['rmdist'], function(){

			let systemJs='jspm_packages/system.js';

			let inputFiles= Array.from(utils.globs.appResources);
			inputFiles.push(`${utils.appFolder}/${systemJs}`);

			console.log(inputFiles);

			return gulp.src(
				inputFiles, 
				{base:utils.appFolder}
			)
			.pipe(htmlReplace({jspmBundle:[
				systemJs, 
				bundleFilename
			]}))
			.pipe(gulp.dest(utils.distFolder));
		});

		gulp.task('copyPolyfills', ['rmdist'], function(){
			return gulp.src(utils.globs.polyfills, {base:  utils.nodeModules})
			.pipe(gulp.dest(utils.distFolder));
		});


		gulp.task('dist', ['jspm', 'copyAndUpdateResources', 'copyPolyfills']);
	}





}


module.exports= DistHelper;
