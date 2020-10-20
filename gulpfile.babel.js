var gulp = require('gulp'),
    babel = require('gulp-babel');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('compileTS', function () {
 return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('src/javascript/es3'));
});

gulp.task('babelTranspile', function () {
    return gulp.src('src/javascript/*.js')
           .pipe(babel({presets: ['@babel/preset-env'] }))
           .pipe(gulp.dest('public/classes'));
});

gulp.task('transpileAll', gulp.series('compileTS', 'babelTranspile'), function(){ console('finished') });
