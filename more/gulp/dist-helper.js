'use strict';

let gulp= require('gulp'),
	clean= require('gulp-clean'),
	del= require('del'),
	utils= require('./utils');


class DistHelper{

	constructor(){
		this.distFolder= 'dist';
		this.appFilesGlobs= utils.globs.wholeApp;
	}


	removeDist(){
		let that= this;
		del.sync([that.distFolder + '/**/*']);
		// return gulp.src( )
		// .pipe( clean({read: false}) );
	}

	// copyBundles(){
	// 	let that= this;

	// 	return gulp.src(
	// 		['node_modules/systemjs/dist/system.js', 
	// 		 'node_modules/zone.js/dist/zone.js', 
	// 		 'node_modules/reflect-metadata/Reflect.js'
	// 	])
	// 	.pipe(gulp.dest(that.distFolder));
	// }

	copyModules(){
		let that= this;

		return gulp.src(
			['node_modules/angular2/**/*', 
			 'node_modules/zone.js/**/*', 
			 'node_modules/reflect-metadata/**/*',
			 'node_modules/systemjs/**/*',
			 'node_modules/rxjs/**/*',
			 'node_modules/google-code-prettify/**/*',
			 'node_modules/jquery/**/*'
		], {base:'node_modules'})
		.pipe(gulp.dest(that.distFolder));
	}


	copyMainApp(){
		let that= this;

		return gulp.src(that.appFilesGlobs)
		.pipe(gulp.dest(that.distFolder));
	}


}


module.exports= new DistHelper();