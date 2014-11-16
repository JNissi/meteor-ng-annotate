Package.describe({
  name: 'jnissi:ng-annotate',
  summary: 'Runs ngAnnotate on javascript files.',
  version: '0.0.1',
  git: 'https://github.com/JNissi/meteor-ng-annotate.git'
});

Package.registerBuildPlugin({
		name: 'ngAnnotate',
		use: [],
		sources: [
			'jnissi:ng-annotate.js'
		],
		npmDependencies: {
			'ng-annotate': '0.12.1'
		}
	});

/*Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jnissi:ng-annotate');
  api.addFiles('jnissi:ng-annotate-tests.js');
});*/
