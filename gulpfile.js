var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

//definindo a ordem de concatenação
var js_files = [
	'src/js/jquery/*.js',
	'src/js/bootstrap/*.js',
	'src/js/creative/*.js'
]

var sass_files = [
	'src/sass/**/*.scss'	
]

var paths = {

    styles: {
        src: 'src/sass/*.scss',
        files: './app/Admin/assets/sass/**/*.scss',
        dest: './public/css/admin'
    }

}

gulp.task('scripts', function(){
	return gulp
				.src( js_files )
				.pipe(concat('app.js'))
				.pipe(uglify())
				.pipe(gulp.dest('build/js'));
});

gulp.task('sass', function(){
	return gulp
				.src(sass_files)
				.pipe(sass({
			        outputStyle: 'compressed',
			        //sourceComments: 'map',
			        includePaths : [paths.styles.src]
			    }))
				//.pipe(gulp.dest('css'))
				//.pipe(concat('main.css'))
				.pipe(gulp.dest('build/css'));
})

gulp.task('watch', function(){
	//gulp.watch('src/**/*.js', function(event){
	//	gutil.log('File '+event.path+' was '+event.type+', running tasks...');
	//	gulp.run('scripts');
	//});
	gulp.watch(['src/**/*.js','src/sass/*.scss'],['scripts']);
	gulp.watch(['src/sass/*.scss'],['sass']);
});
