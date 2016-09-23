'use strict';

let gcache = require('gulp-cached'),
	debug = require('gulp-debug'),
  	gutil= require('gulp-util'),
  	addsrc= require('gulp-add-src'),
  	tsc = require('gulp-typescript'),
  	sourcemaps = require('gulp-sourcemaps'),
	typescript = require('typescript'),
	path= require('path'),
	utils = require('./utils');


// Set the gulp object in the constructor
// Then call the registerTasks methods to register these tasks on gulp
// Allow to register tasks to help with typescript functionalities (transpile / observe modifications to transpile )
class TypescriptHelper{

	constructor(gulp){
		this.gulp = gulp;
	}

	registerTasks() { 

		let gulp = this.gulp;
		let globs= utils.globs;

		// Transpile typescript files
		gulp.task('compileTs', function() {

			// Use the tsconfig file which is in the root project
			// so we have the same config in the ide
			let tsProject = tsc.createProject(
				path.join(utils.baseProject, 'tsconfig.json'),
				{ typescript: typescript }
			);

			// Define the set of ts files
			let tsFiles = globs.appTsGlobs;

			// Source all ts files from the base folder
			return gulp.src(tsFiles, { base: utils.appFolder })
				// filter on modified files only, we don't want to compile everything
				// each time a file is modified
				.pipe(gcache('tscache'))
				// Add the definitions files which are always needed
				.pipe(addsrc(globs.appDefTsGlobs))
				//We like to see what is in the pipe
				.pipe(debug())
				// And we also need to generate sourcemaps to help debugging
				.pipe(sourcemaps.init())
				// Finally we can do the transpilation
				.pipe(tsc(tsProject))
				// Put the mapping in a file
				.pipe(sourcemaps.write())
				// And copy the results in the same folder where it comes from
				.pipe(gulp.dest(utils.appFolder));
		});

		// Just observe modifications and call the
		// transpilation process when something changes
		gulp.task('watchTs', function() {
			gutil.log('watching ts files');
			gulp.watch(globs.appTsGlobs, ['compileTs']);
		});


	}	

}

module.exports= TypescriptHelper;