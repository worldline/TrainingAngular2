'use strict'; 

let gulp= require('gulp');


//Register server tasks
let ServerHelper= require('./server-helper');
new ServerHelper(gulp).registerTasks();

//Register ts tasks
let TypescriptHelper= require('./typescript-helper');
new TypescriptHelper(gulp).registerTasks();

//Register dist tasks
let DistHelper= require('./dist-helper');
new DistHelper(gulp).registerTasks();

//Transverse tasks
gulp.task('dev', ['compileTs', 'express', 'watchTs'], function(cb){});