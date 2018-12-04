var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./Assets/*.scss')
    .pipe(sass({
    	includePaths: require('node-normalize-scss').includePaths
    }).on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./Assets'));
});


gulp.task('sass:watch', function() {
	gulp.watch('./Assets/*.scss', ['sass']);
});

gulp.task('default', [ 'sass' ]);