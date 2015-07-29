var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('scripts', function(){
	return gulp
				.src(['src/js/**/*.js'])
				.pipe(uglify())
				.pipe(gulp.dest('build/js'));
});