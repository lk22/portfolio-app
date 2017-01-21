//
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'watch'], function() {
	console.log('stylesheet compiled succefully');
});

gulp.task('sass', function() {
	return gulp.src('./resources/assets/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/.app.css'));
});

gulp.task('watch', ['sass'], function() {
	gulp.watch('./app/resources/assets/sass/app.scss');
});