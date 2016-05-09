var _= require('underscore'),
	glob=require('glob'),
  	express = require('express'),
  	http = require('http'),
  	baseProject= __dirname + '/../../',
  	tscConf= require(baseProject + 'tsconfig.json');

var Module= function(){

	var that= this;

	var appFolder= 'trainingapp';

	this.globs= {
		appDefTsGlobs: ['typings/**/*.d.ts'],
		appTsGlobs: [ appFolder + '/src/**/*.ts'],
    	appCssGlobs: [ appFolder + '/styles/**/*.css'],
    	appImages: [ appFolder + '/imgs/**/*'],
    	wholeApp: [ appFolder + '/**/*']
	};

	this.getAbsoluteAppFolder= function(){
		return path.join(baseProject, appFolder);
	}

	this.getFilesForPatterns= function(patterns){
	  return _.chain(patterns)
	  .map(function(pattern){return glob.sync(pattern); })
	  .reduce(function(memo, num){
	    return memo.concat(num);
	  }, []).value();
	};


	this.getServer= function(){
	  return http.createServer(express()
	    .get('/', function(req, res){
	    	res.sendFile('index-express.html', {root: appFolder});
	    })
	    .use(express.static(baseProject + '/' + appFolder))
	    .use(express.static(baseProject + '/node_modules/'))
	  );
	};

	this.getPackage= function(){
		return require(baseProject +'/package.json');
	};

	this.getHeaders= function(){
		var cpackage= that.getPackage(),
			author= cpackage.author,
			version= cpackage.version,
			authorTemplate= '/* Author: ' + author.name + '<' + author.email + '> */\n',
			versionTemplate= '/* Version: ' + version + ' */\n',
			endTemplate= '\n\n',
			template= authorTemplate + versionTemplate + endTemplate;

		return template;
	};

	this.getTsCompilerOptions= function(){
		var res= tscConf.compilerOptions;
		delete res.sourceRoot;
		res.emitError= false;
		res.tscSearch= ['bundle'];
		// res.outDir= appFolder + '/src/';
		res.outDir= '.';
		return res;
	};

	this.getOutputCompilationFolder= function(){
		// return appFolder + '/src/';
		return baseProject;
	};



};

module.exports=new Module();
