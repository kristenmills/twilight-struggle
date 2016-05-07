import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../webpack.config.dev';

gulp.task('default', () => {
  config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');
  const compiler = webpack(config);

  new WebpackDevServer(compiler, {
    hot: true,
  })
    .listen(8080, 'localhost', err => {
      if (err) {
        notify({
          title: 'Compile Error',
          message: 'webpack: <%= options.error.message %>',
          templateOptions: {
            error: err,
          },
        });
      }

      gutil.log('[webpack]', '"http://localhost:8080/index.html');
    });
});
