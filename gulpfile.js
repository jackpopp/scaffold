var gulp         = require('gulp'),
	watch        = require('gulp-watch'),
	sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    coffee       = require('gulp-coffee'),
    merge        = require('merge-stream');


gulp.task('build', function()
{
    return gulp.src('src/scaffold.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/'));
});

gulp.task('docs.css', function(cb)
{
    compile = gulp.src('src/docs/css/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('docs/css'));

    copy = gulp.src('src/docs/css/**/*.css')
        .pipe(gulp.dest('docs/css'));

    return merge(compile, copy);
});

gulp.task('docs.js', function()
{
    gulp.src('src/docs/js/*.js')
        .pipe(gulp.dest('docs/js'))
})

gulp.task('docs', ['docs.css','docs.js']);

gulp.task('watch', function()
{
    watch('src/**/*.*', ['build', 'docs'])
});