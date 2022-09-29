const { watch, task, src } = require('gulp');
let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');

gulp.task('scss', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/bild/css'))
    .pipe(browserSync.reload({ stream: true }))
});
gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('script', function () {
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

// gulp.task('js', function () {
//   return gulp.src([
//   ])
//     .pipe(concat('libs.min.js')) // concat-обращение в один файл
//     .pipe(uglify())
//     .pipe(gulp.dest('app/js'))
//     .pipe(browserSync.reload({ stream: true }))
// });

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss')) 
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('script'))
  

});
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: "app/"
    },
    open: false
  });
});
gulp.task('default', gulp.parallel('scss',  'browser-sync', 'watch')); 