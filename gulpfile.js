var gulp = require('gulp');
var php2html = require('gulp-php2html');

gulp.task('compile-php', function() {
    gulp.src(['./php-version/*.php', '!./php-version/header.php', '!./php-version/footer.php', '!./php-version/config.php'])
        .pipe(php2html())
        .pipe(gulp.dest('./'));
});

gulp.task('watch-php', function() {
    gulp.watch('./php-version/*.php', ['compile-php']);
});