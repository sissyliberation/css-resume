var gulp            = require('gulp');
var sass            = require('gulp-sass');
var path            = require('path');
var srcPath         = 'scss/';
var distPath        = '';

var watchPaths = {
  sass: [srcPath+'main.scss', srcPath+'partials/*.scss']
};

gulp.task('sass', function () {
  gulp
    .src(srcPath + 'main.scss') 
    .pipe(sass())
    .pipe(gulp.dest(distPath + 'css'));

});
gulp.task('watch', function() {
  gulp.watch(watchPaths.sass, ['sass']);
});

gulp.task('default', ['sass', 'watch']);