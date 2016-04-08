var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');

gulp.task('less-dev', function () {
	return gulp.src('./src/less/**/*.less')
		.pipe(less({
			paths: [ paths.join(__dirname, 'less', 'includes')]
		}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-css', function() {
	return gulp.src('styles/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist'));
});
