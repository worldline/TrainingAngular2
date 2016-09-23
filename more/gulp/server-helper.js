'use strict';

let	gutil= require('gulp-util'),
	express = require('express'),
  	http = require('http'),
  	bodyParser= require('body-parser'),
  	path= require('path'),
  	utils= require('./utils');

// Set the gulp object in the constructor
// Then call the registerTasks methods to register these tasks on gulp
// Allow to register server tasks 
class ServerHelper{

	constructor(gulp){
		this.gulp= gulp;
	}

	// Define the server object which searches for files into 
	// node_modules and trainingapp
	run(){

		var appServer= express()
		    .get('/', function(req, res){
		    	res.sendFile('index.html', {root: utils.appFolder});
		    })
		    .use(bodyParser.json())
		    .use(express.static(utils.baseProject + '/' + utils.appFolder))
		    .use(express.static(utils.baseProject + '/node_modules'));

		return http.createServer(appServer);

	}

	registerTasks(){

		let gulp= this.gulp;
		let server= this.run();

		// Define the express task which runs the express http server
		gulp.task('express', function(cb){
		  let port= 8080;
		  server.listen(port, function(){
		    gutil.log(`server listening on ${port}`);
		    cb();
		  });
		});
		
	}


};


module.exports= ServerHelper;