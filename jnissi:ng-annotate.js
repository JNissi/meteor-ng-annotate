var ngAnnotate = Npm.require('ng-annotate');

var ngAnnotateHandler = function ngAnnotateHandler(compileStep) {
	var res = ngAnnotate(compileStep.read().toString('utf8'), {
		add: true,
		es6: true
	});
	console.dir(res);

	compileStep.addJavaScript({
		path: compileStep.inputPath + '.js',
		data: res.src,
		sourcePath: compileStep.inputPath
	});
};

Plugin.registerSourceHandler('ng', ngAnnotateHandler);
