Package.describe({
	name    : 'multiply:iron-router-progress',
	version : '1.0.2',
	summary : 'Progressbar for iron:router',
	git     : 'https://github.com/Multiply/iron-router-progress.git'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.2');

	api.use([
		'coffeescript',
		'less',
		'underscore',
		'templating',
		'jquery',
		'reactive-var',
		'clinical:router',
		'iron:layout@1.0.0'
	], 'client');

	api.imply('clinical:router');

	api.addFiles([
		'progress.html',
		'progress.coffee',
		'progress.less'
	], 'client');
});
