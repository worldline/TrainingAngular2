'use strict';

let _= require('underscore'),
	glob=require('glob'),
  	path= require('path'),
  	baseProject= path.join(__dirname, '..', '..', '/'),
  	distFolder= path.join(baseProject, 'dist');


var Module= function(){

	let that= this;

	this.appFolder= 'trainingapp';

	this.baseProject= baseProject;

	this.distFolder= distFolder;

	this.nodeModules= 'node_modules';

	this.globs= {
		appTsGlobs: [ `${this.appFolder}/**/*.ts`, `!${this.appFolder}/jspm_packages/**/*`],
		appDefTsGlobs: [ 'typings/**/*.ts'],
		appEntryPoint: [ `${this.appFolder}/components/app/app.js` ],
		appEntryPoints: [ `${this.appFolder}/components/**/*.js` ],
		appResources: [ 
			`${this.appFolder}/components/**/*`, 
			`${this.appFolder}/index.html`, 
			// `${this.appFolder}/config.js`,
			`!${this.appFolder}/components/**/*.{ts,js}`
		],
		polyfills: [
			`${this.nodeModules}/zone.js/dist/zone.js`, 
			`${this.nodeModules}/reflect-metadata/Reflect.js`,
			`${this.nodeModules}/reflect-metadata/Reflect.js`
		]
	};

	this.getFilesForPatterns= function(patterns){
	  return _.chain(patterns)
	  .map(function(pattern){return glob.sync(pattern); })
	  .reduce(function(memo, num){
	    return memo.concat(num);
	  }, []).value();
	};

};

module.exports=new Module();
