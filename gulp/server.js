'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var util = require('util');

module.exports = function(options) {
	function browserSyncInit(baseDir, browser='default', done) {
		var routes = null;
		// if(baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
		// 	routes = {
		// 		'/bower_components': 'bower_components'
		// 	};
		// }

		var server = {
			baseDir: baseDir,
			// routes: {
			// 	'/bower_components': 'bower_components'
			// }
		};

		browserSync.instance = browserSync.init({
			startPath: '/',
			server: server,
			browser: browser,
			notify: false,
			open: false
		});

		done();
	}

	gulp.task('serve', gulp.series('watch', browserSyncInit.bind(null,[
		options.tmp + '/',
		'.',
	],null)));

	gulp.task('serve:dist', gulp.series(browserSyncInit.bind(null,[
		'dist',
	],null)));

	gulp.task('serve:review', gulp.series('build', browserSyncInit.bind(null,[
		'dist',
	],null)));
};
