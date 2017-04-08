const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project typescript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
  const tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['build'], () => {
  gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('assets', function(){
  return gulp.src(JSON_FILES).pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);