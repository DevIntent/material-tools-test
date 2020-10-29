const gulp = require('gulp');
const MaterialTools = require('angular-material-tools');
const builder = new MaterialTools({
  destination: 'build',
  version: 'local',
  themes: []
});

gulp.task('styles', [], function (done) {
  builder._getData().then(function (buildData) {
    builder._buildTheme(buildData);
    done();
  });
});
