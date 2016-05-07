export default {
  build: {
    stylesheets: './dist/css',
    js: './dist/js',
    jsMain: './dist/js/main.js',
    dir: './dist',
  },

  source: {
    stylesheets: './app/css/main.css',
    jsMain: './app/js/app.jsx',
    scripts: './app/js/**/*.@(js|jsx)',
    html: './app/index.html',
    circle: './circle.yml',
  },
};
