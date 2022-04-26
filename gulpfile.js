let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let del = require('del');
let runSequence = require('run-sequence');
let uglify = require('gulp-uglify');

// Task to minify HTML
gulp.task('minify-html', function() {
return gulp.src('src/origin.html')
.pipe(htmlmin())
.pipe(gulp.dest('dist'));
// I moved the file to the root to easily deploy it
});




gulp.task('scripts', function() {
  return gulp.src('./src/script.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./dist'))
});
