'use strict';

var gulp = require('gulp');
var exec = require('sync-exec');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

module.exports = function(options) {
	var dist = 'dist';
	gulp.task('html', gulp.series('inject',function () {
		return gulp.src(options.tmp + '/injected.tpl')
			.pipe($.useref())
			// .pipe($.if('*.html', $.replace('bower_components', '../bower_components')))
			.pipe($.if('*.js', $.preprocess({context: {dist: true}})))
			.pipe($.if('*.js', $.uglify()))
			// .pipe($.if('*.css', $.cssmin()))
			.pipe($.if('*.js',gulp.dest(dist+'/')))
			.pipe(gulp.dest(dist+'/'))
			.pipe($.size({ title: dist+'/', showFiles: true }));
	},'template:dist'));

	gulp.task('copy:docs', function () {
		return gulp.src([
			// options.src + '/favicon.ico',
			options.tmp + '/src/docs/**/*.html',
		])
		.pipe(gulp.dest('dist/docs'));
	});

	gulp.task('copy:fonts', function () {
		return gulp.src('node_modules/font-awesome/fonts/*.{svg,eot,ttf,woff,woff2,otf}')
		.pipe(gulp.dest('dist/fonts'));
	});

	gulp.task('clean:dist', function (done) {
		return $.del([
			dist+'/',
			// options.tmp + '/src/'
		],{force:true});
	});

	gulp.task('clean:tpl:dist', function (done) {
		return $.del([
			dist+'/**/*.tpl',
		],{force:true});
	});

	gulp.task('build', gulp.series(
		'clean:dist',
		gulp.parallel(
			'html',
			'copy:fonts'
			// 'other'
		),
		'clean:tpl:dist'
		// 'copy:docs'
	));

	gulp.task('deploy',gulp.series('build',function(done){
		var c = [
			'cd '+dist,
			'git init',
			'git add .',
			'git commit -m "Deploy to Github Pages"',
			'git push --force git@github.com:webcaetano/craft.git master:gh-pages' // change adress to you repo
		].join(" && ")
		console.log(exec(c));
		done();
	}));

	// gulp.task('deploy:build',gulp.series('build','deploy'))
};
