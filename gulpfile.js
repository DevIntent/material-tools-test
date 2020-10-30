const gulp = require('gulp');
const MaterialTools = require('angular-material-tools');
let tools = new MaterialTools({
  destination: './dist',
  version: '1.2.1',
  modules: ['menu', 'checkbox'],
  theme: {
    primaryPalette: 'indigo',
    accentPalette: 'purple',
    warnPalette: 'deep-orange',
    backgroundPalette: 'grey'
  }
});

gulp.task('styles', [], function (done) {

  const successHandler = () => console.log('Build was successful.');
  const errorHandler = error => console.error(error);

  tools.build().then(successHandler).catch(errorHandler);         // Build all JS/CSS/themes

  tools.build('js').then(successHandler).catch(errorHandler);     // Only build the JS.
  tools.build('theme').then(successHandler).catch(errorHandler);  // Only build the theme.
  tools.build('css').then(successHandler).catch(errorHandler);    // Only build the CSS

  // You can also build a subset of files.
  tools.build('css', 'js');   // Builds both the CSS and the JS.
});
