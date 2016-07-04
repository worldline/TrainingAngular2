var fs= require('fs');
var replace= require('replace');

var CmpModule= function(){

	var args= process.argv;

	var checkArgs= function(){

		if (args.length < 3){
			console.log('Use: newComp component-name [parent-folder]');
			return false;
		}

		return true;
	}

	var split= function(data, symbol){
		var tmpRes= data.split(symbol);
		var res= [];

		for (var i in tmpRes){
			if (tmpRes[i] != undefined && tmpRes[i] != ''){
				res.push(tmpRes[i]);
			}
		}

		return res;

	}	

	var getmoduleName= function(name){
		return name.substring(0, 1).toLowerCase() + name.substring(1);
	}	

	var mkdirSync = function (path) {
	  try {
	    fs.mkdirSync(path);
	  } catch(e) {
	    if ( e.code != 'EEXIST' ) throw e;
	  }
	}

	var recurseMkdir= function(path){

		var folders= split(path, '/');
		if (folders){
			var fullPath= "";
			for( var i in folders){
				fullPath+= folders[i] + '/';
				try{
					mkdirSync(fullPath);
				}
				catch(e){
					console.log('folder already exists');
				}
			}
		}
	}

	var getRelativePath= function(depthAfterRoot){
		var res= '';
		for (var i= 0; i< depthAfterRoot; i++){
			res+= '../';
		}
		return res;
	}

	var generateRelativeServicePath= function(depthAfterRoot){
		return getRelativePath(depthAfterRoot) + '../../..';
	};

	var generateRelativeCommonSlidePath= function(depthAfterRoot){
		return getRelativePath(depthAfterRoot) + '..';
	};

	this.run= function(){
		if (!checkArgs()){
			return;
		}

		var rootFolder= 'trainingapp/src/components/slides/',
			cmpName= args[2],
			categoryFolder= args[3]? args[3] : '',
			parentFolder= rootFolder + categoryFolder + '/',
			depthAfterRoot= args[3]? split(args[3], '/').length: 0,
			relativeServicePath= generateRelativeServicePath(depthAfterRoot),
			relativeCommonSlidePath= generateRelativeCommonSlidePath(depthAfterRoot),
			moduleName= getmoduleName(cmpName),
			folder= parentFolder + moduleName,
			tsFile= folder + '/' + moduleName + '.ts',
			htmlFile= folder + '/' + moduleName + '.html',
			styleFile= folder + '/' + moduleName + '.css';

		recurseMkdir(folder);
		
		fs.createReadStream('more/tools/composant.tpl')
		.pipe(fs.createWriteStream(tsFile).on('finish', function(){
			[
				{regex:'#{cmpName}', replace:cmpName}, 
				{regex:'#{moduleName}', replace:moduleName}, 
				{regex:'#{categoryFolder}', replace:categoryFolder}, 
				{regex:'#{relativeServicePath}', replace: relativeServicePath},
				{regex:'#{relativeCommonSlidePath}', replace: relativeCommonSlidePath},

			]
			.forEach(function(data){
				replace({
			  		regex: data.regex,
			  		replacement: data.replace,
			  		paths: [tsFile],
			  		recursive: false,
			  		silent: true
				});
			});
		}));

		fs.openSync(htmlFile, 'w');
		fs.openSync(styleFile, 'w');


	};
};

new CmpModule().run();
