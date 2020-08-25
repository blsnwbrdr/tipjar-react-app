// GULP
const gulp = require('gulp');

// MODULES
const sass = require('gulp-sass');
const cssMinifiy = require('gulp-cssmin');
const rename = require('gulp-rename');

// SOURCE DIRECTORY
const sourceDir = 'src/styles/';

// DESTINATION DIRECTORY
const destDir = 'src/styles/';

// COMPILE SASS
gulp.task('compile', () => {
  return gulp.src([`${sourceDir}*.{sass,scss}`])
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
    .pipe(gulp.dest(destDir))
});

gulp.task('sass:watch', () => {
  gulp.watch(`${sourceDir}*.{sass,scss}`, gulp.series(['compile']), () => {});
});

gulp.task('default', gulp.series(['sass:watch'], () => {}));
