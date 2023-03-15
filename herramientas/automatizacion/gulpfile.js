const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
    console.log('construyendo el sitio');
    setTimeout(cb, 1200);
})

gulp.task('server', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

gulp.task('default', gulp.series(build, server));