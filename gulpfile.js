var gulp         = require('gulp'),
	watch        = require('gulp-watch'),
	sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    coffee       = require('gulp-coffee')


gulp.task('build', function(){
    return gulp.src('src/scaffold.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/'));
});

gulp.task('docs', function(){

});

gulp.task('watch', function()
{

});