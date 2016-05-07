import gulp from 'gulp';
import paths from '../config';

gulp.task('build:stylesheets', () => {
  gulp.src(paths.source.stylesheets)
    .pipe(gulp.dest(paths.build.stylesheets));
});
