'use strict';

const fs= require('fs'),
	path= require('path'),
	utils= require('./utils'),
	jspm= require('jspm'),
	gjspm= require('gulp-jspm'),
	grename= require('gulp-rename'),
	gfilter= require('gulp-filter'),
	debug = require('gulp-debug'),
	save= require('gulp-save'),
	htmlReplace= require('gulp-html-replace'),
	rimraf= require('rimraf');


// Set the gulp object in the constructor
// Then call the registerTasks methods to register these tasks on gulp
// Allow to register tasks to help generate the deliverable (for github)
class DistHelper{

	constructor(gulp){
		this.gulp= gulp;
	}

	registerTasks(){

		let gulp= this.gulp;
		let bundleFilename= 'bundle.js';

		// Remove the dist folder if exists
		gulp.task('rmdist', function(cb){
			rimraf(utils.distFolder, cb);
		});

		// Wait for the ts transpilation, the create the bundle by concatenating all our js app and all its dependencies
		// Put this bundle in the dist folder
		gulp.task('jspm', ['compileTs', 'rmdist'], function(cb){

			const builder = new jspm.Builder();

			builder.bundle('src/**/*.js')
			.then( (output) => {
				fs.existsSync(`${utils.distFolder}`) || fs.mkdirSync(`${utils.distFolder}`);
				fs.writeFile( path.join(`${utils.distFolder}`, bundleFilename) , output.source, function(err){
					if (err){
						throw err;
					}

					cb();
				} );
			} );


		});

		// Copy all needed resources into the dist folder (such as html templates, systemjs, data json)
		// and update index.html to use the jspm bundle
		gulp.task('copyAndUpdateResources', ['rmdist'], function(){

			let inputFiles= utils.globs.appResources.concat(utils.globs.systemJs);
			let indexFilter= gfilter(`${utils.appFolder}/index.html`, {restore: true});

			// Input stream contains all resources
			return gulp.src(inputFiles, {base:utils.appFolder})
			// filter to index.html
			.pipe(indexFilter)
			// Update index.html to use our jspm bundle
			.pipe(htmlReplace({
				jspmBundle:[bundleFilename],
				jspmConfig:{
					src:null,
					tpl:`<script>System.config({baseURL: "/TrainingAngular2/gh",  defaultJSExtensions: true});</script>`
				}
			}))
			// Back to all resources
			.pipe(indexFilter.restore)
			// Move all resources included modified ones to the dist folder
			.pipe(gulp.dest(utils.distFolder));
		});

		// Copy needed polyfills to the dist folder
		gulp.task('copyPolyfills', ['rmdist'], function(){
			return gulp.src(utils.globs.polyfills, {base:  utils.nodeModules})
			.pipe(gulp.dest(utils.distFolder));
		});

		// Do everything to create a deliverable in the dist folder, check dependencies for details
		gulp.task('dist', ['jspm', 'copyAndUpdateResources', 'copyPolyfills']);
	}





}


module.exports= DistHelper;
