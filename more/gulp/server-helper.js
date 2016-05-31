'use strict';

let	gutil= require('gulp-util'),
	express = require('express'),
  	http = require('http'),
  	bodyParser= require('body-parser'),
  	path= require('path'),
  	utils= require('./utils');


class ServerHelper{

	constructor(gulp){
		this.gulp= gulp;
	}

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

		gulp.task('express', function(cb){
		  let port= 8081;
		  server.listen(port, function(){
		    gutil.log(`server listening on ${port}`);
		    cb();
		  });
		});
		
	}


};


module.exports= ServerHelper;