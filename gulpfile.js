var config = {
	url: 'http://localhost', // can include a port such as localhost:8000
}

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	plumber = require('gulp-plumber'),
	filter = require('gulp-filter'),
	fs = require('fs'),
	penthouse = require('penthouse');

gulp.task('critical', ['sass'], function() {
	penthouse({
		url : config.url,
		css :  'css/global.css',
	}, function(err, criticalCss) {
		fs.writeFileSync('css/critical/index.css',criticalCss);
	});
});


gulp.task('browser-sync', function() {
	browserSync({
		proxy: config.url
	});
});


gulp.task('sass', function() {
	return gulp.src('sass/**/*.scss')
		.pipe(plumber())
		.pipe(sass({ require: 'breakpoint' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'ios 6', 'android 4'))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
		.pipe(filter('**/*.css'))
		.pipe(reload({stream:true}));
});


gulp.task('bs-reload', function () {
	browserSync.reload();
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync', 'critical'], function () {
	var watcher = gulp.watch(['sass/**/*.scss', 'js/**/*.js', '**/*.tpl'], ['sass', 'bs-reload']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});
