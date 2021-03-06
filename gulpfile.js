'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');

var options = {
	src: 'src',
	dist: 'dist',
	tmp: '.tmp',
	errorHandler: function(title) {
		return function(err) {
			gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
			this.emit('end');
		};
	}
};

_.each([
	'markdown.js',
	'styles.js',
	'scripts.js',
	'inject.js',
	'template.js',
	'build.js',
	'watch.js',
	'server.js',
],function(file){
	require('./gulp/' + file)(options);
})

gulp.task('default', gulp.series('serve'));
