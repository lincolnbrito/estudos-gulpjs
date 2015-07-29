var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

//definindo a ordem de concatenação
var files = [
	'src/js/jquery/*.js',
	'src/js/bootstrap/*.js',
	'src/js/creative/*.js'
]

gulp.task('scripts', function(){
	return gulp
				.src( files )
				.pipe(concat('app.js'))
				.pipe(uglify())
				.pipe(gulp.dest('build/js'));
});

gulp.task('watch', function(){
	gulp.watch('src/**/*.js', function(event){
		gutil.log('File '+event.path+' was '+event.type+', running tasks...');
		gulp.run('scripts');
	});
});